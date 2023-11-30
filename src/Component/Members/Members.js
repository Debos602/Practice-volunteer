import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./Member.css";

const Members = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<div className="bg-slate-400 h-screen">
			<div className="container mx-auto px-20">
				<p>This is members route</p>
			</div>
		</div>
	);
};

export default Members;
