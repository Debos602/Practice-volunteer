import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const Userlist = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<div className="py-36 bg-indigo-950	 text-white">
			<div className="mx-32 ">
				<div className="grid grid-cols-4 mt-5 gap-4">
					<div className="text-2xl ">
						<div className="flex items-center">
							<UserGroupIcon className="h-5 w-5  text-blue-500 mr-2 inline-block" />
							<h2 className="text-white">Service Register List</h2>
						</div>
						<p className="pt-7  flex items-center">
							{" "}
							<PlusIcon className="h-5 w-5  text-blue-500 mr-2 inline-block"></PlusIcon>{" "}
							<span className="text-white">Add event</span>
						</p>
					</div>
					<div className="border-2 px-12 py-8 rounded-lg col-span-3">
						<h2 className="text-white text-center text-4xl font-bold mb-4 uppercase">
							User List
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Userlist;
