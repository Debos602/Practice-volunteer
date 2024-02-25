import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import "./Member.css";

import Member from "../Member/Member";

const Members = () => {
	const { user, logOut } = useContext(AuthContext);
	const [members, setMembers] = useState([]);

	useEffect(() => {
		fetch(`https://practice-voluteer-server.vercel.app/addedmember?email=${user?.email}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem("volunteer-token")}`,
			},
		})
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					return logOut();
				}
				return res.json();
			})
			.then((data) => {
				// console.log("received", data);
				setMembers(data);
			});
	}, [user?.email, logOut]);
	const handleDelete = (id) => {
		const proceed = window.confirm(
			"Are you sure, you want to delete this member"
		);
		if (proceed) {
			fetch(`https://practice-voluteer-server.vercel.app/addedmember/${id}`, {
				method: "DELETE",
				headers: {
					authorization: `Bearer ${localStorage.getItem("volunteer-token")}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("deleted successfully");
						const remaining = members.filter((member) => member._id !== id);
						setMembers(remaining);
					}
				});
		}
	};

	const handleStatusUpdate = (id) => {
		fetch(`https://practice-voluteer-server.vercel.app/addedmember/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("volunteer-token")}`,
			},
			body: JSON.stringify({ status: "APPROVED" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = members.filter((member) => member._id !== id);
					const changing = members.find((member) => member._id === id);
					changing.status = "APRROVED";

					const finalMember = [changing, ...remaining];
					setMembers(finalMember);
				}
			});
	};

	return (
		<div className=" bg-indigo-950  text-white min-h-screen	 py-36">
			<div className="container mx-auto px-20">
				<div className="overflow-x-auto">
					<table className="table table-zebra h-full">
						{/* head */}
						<thead className="text-white">
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Date</th>
								<th>Confirmation</th>
								<th>action</th>
							</tr>
						</thead>
						<tbody>
							{members.map((member) => (
								<Member
									className="container mx-auto px-20"
									member={member}
									handleDelete={handleDelete}
									handleStatusUpdate={handleStatusUpdate}
									key={member._id}
								></Member>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Members;
