import React, { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const Member = ({ member, handleDelete, handleStatusUpdate }) => {
	const { _id, services, name, status, date } = member;
	const [serviceData, setServiceData] = useState();

	useEffect(() => {
		fetch(`https://practice-voluteer-server.vercel.app/services/${services}`)
			.then((res) => res.json())
			.then((data) => setServiceData(data));
	}, [services]);

	return (
		<tr className="text-white">
			<td>
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className="rounded w-24 h-24">
							{serviceData?.picture && (
								<img
									src={serviceData?.picture}
									alt="Avatar Tailwind CSS Component"
								/>
							)}
						</div>
					</div>
				</div>
			</td>
			<td>{name}</td>
			<td>{date}</td>
			<td onClick={() => handleStatusUpdate(_id)}>
				{status ? status : "pending"}
			</td>

			<td>
				<TrashIcon
					onClick={() => handleDelete(_id)}
					className="h-6 w-6"
				></TrashIcon>
			</td>
		</tr>
	);
};

export default Member;
