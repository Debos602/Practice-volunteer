import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logos/logo.png";

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
		<nav className="bg-rose-100 py-3 md:container md:px-20 sm:px-10">
			<div className="flex justify-between items-center md:w-full">
				<div>
					<img className="h-16" src={Logo} alt="" />
				</div>
				<ul
					className={`md:flex text-black font-bold sm:px-10 sm:-mx-10 md:mx-0  justify-end  md:static w-full bg-rose-100 absolute duration-500 ${
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
		</nav>
	);
};

export default NavBar;
