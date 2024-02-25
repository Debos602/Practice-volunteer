import React, { useContext } from "react";
import "./Service.css";
import { useLoaderData } from "react-router-dom";
import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Services = () => {
	const { _id, name, company, balance } = useLoaderData();
	const { user } = useContext(AuthContext);
	// console.log(user.email);

	const handleplaceMember = (e) => {
		e.preventDefault();
		const form = e.target;
		const eventHolder = form.title.value;
		const eventDate = form.date.value;
		const email = user?.email || "unregister";
		const message = form.message.value;
		const image = form.file.value;
		// console.log(eventHolder, email, eventDate, message);
		const addedMember = {
			services: _id,
			name,
			balance,
			holder: eventHolder,
			email: email,
			information: message,
			date: eventDate,
			image: image,
		};

		fetch("https://practice-voluteer-server.vercel.app/addedMember", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("volunteer-token")}`
			},
			body: JSON.stringify(addedMember),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					alert("Add member successfully");
					form.reset();
				}
			})
			.catch((er) => console.error(er));
	};

	const handleImageUpload = (e) => {
		// Handle image upload logic here
		const file = e.target.files[0];
		console.log("Uploaded image:", file);
	};

	return (
		<div className="px-20 min-h-screen py-36 bg-blue-900">
			<div className="grid grid-cols-[1fr,3fr]">
				<div className="sidebar py-8 text-2xl ">
					<div className="flex items-center">
						<UserGroupIcon className="h-5 w-5  text-blue-500 mr-2 inline-block" />
						<h2 className="text-white">Volunteer register list</h2>
					</div>
					<p className="pt-7  flex items-center">
						{" "}
						<PlusIcon className="h-5 w-5  text-blue-500 mr-2 inline-block"></PlusIcon>{" "}
						<span className="text-white">Add event</span>
					</p>
				</div>
				<div className="input-area px-4 py-8 bg-indigo-900">
					<form onSubmit={handleplaceMember}>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
							<div className="label block text-2xl font-semibold text-white">
								<span className="label-text mb-5 text-white inline-block">
									Event title
								</span>
								<input
									type="text"
									name="title"
									placeholder="Enter Title"
									defaultValue={company}
									className="input input-ghost w-full border border-solid border-gray-300 bg-indigo-950 text-white"
									readOnly
								/>
							</div>
							<div className="label block text-2xl font-semibold text-white">
								<span className="label-text mb-5 text-white inline-block ">
									Event Date
								</span>
								<input
									type="text"
									name="date"
									defaultValue={user?.metadata?.lastSignInTime}
									placeholder="Enter Date"
									className="input input-ghost w-full border border-solid border-gray-300 bg-indigo-950 text-white"
								/>
							</div>
						</div>
						<div className="flex justify-center bg-indigo-900 text-white">
							<div className="w-2/4">
								<label className="label">
									<div className="label-text mb-5 font-semibold block text-white">
										Description
									</div>
								</label>
								<textarea
									name="message"
									className="textarea h-24 w-full textarea-bordered block bg-indigo-950"
									placeholder="Bio"
								></textarea>
							</div>
							<div className="w-2/4 px-5">
								<label className="label">
									<div className="label-text mb-5 font-semibold block text-white">
										Upload Image
									</div>
								</label>
								<input
									name="file"
									type="file"
									accept="image/*"
									onChange={handleImageUpload}
								/>
							</div>
						</div>
						<div className="flex justify-center pt-10">
							<input
								type="submit"
								className="btn btn-primary w-1/4"
								name=""
								id=""
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Services;
