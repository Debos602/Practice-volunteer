import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logos/logo.png";
import "./NavBar.css";
import Cards from "../Cards/Cards";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const menu = (
		<>
			<li className="px-2">
				<Link to="/">Home</Link>
			</li>
			<li className="px-2">
				<Link to="/donation">Donation</Link>
			</li>
			<li className="px-2">
				<Link to="/collection">Collection</Link>
			</li>
			<li className="px-2">
				<Link to="/contacts">Contact</Link>
			</li>
		</>
	);

	return (
		<nav className="py-3 md:container md:px-20 sm:px-10 bg-image relative">
			<div className="flex justify-between items-center md:w-full">
				<div>
					<img className="h-16" src={Logo} alt="" />
				</div>
				<ul
					className={`md:flex text-white font-bold sm:px-10 sm:-mx-10 md:mx-0  justify-end  md:static w-full absolute duration-500 ${
						open ? "top-20" : "top-[-120px]"
					}`}
				>
					{menu}
				</ul>
				<div
					onClick={() => setOpen(!open)}
					className="h-6 w-6 md:hidden text-back"
				>
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</div>
			</div>
			<div className="flex justify-center items-center">
				<div className="w-1/2 bg-overlay">
					<h2 className="text-2xl font-bold text-center py-2 text-white opacity-80">
						What's volunteer service you needed
					</h2>
					<div className="text-center">
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
				</div>
			</div>
			<Cards></Cards>
		</nav>
	);
};

export default NavBar;
