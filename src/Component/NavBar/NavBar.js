import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logos/logo.png";
import "./NavBar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Members from "../Members/Members";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	// console.log(user);

	const handleLogOut = (e) => {
		e.preventDefault();
		logOut()
			.then(() => {})
			.catch((error) => console.error(error));
	};

	const menu = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/members">Members</Link>
			</li>

			<li>
				<Link to="/collection">Collection</Link>
			</li>
			<li>
				{user?.uid ? (
					<Link onClick={handleLogOut} to="/login">
						LogOut
					</Link>
				) : (
					<Link to="/login">LogIn</Link>
				)}
			</li>
		</>
	);

	return (
		<div className="bg-yellow-100">
			<div className="main-nav">
				<nav className="py-3 md:container md:px-20 mx-auto">
					<div className="flex justify-between items-center w-full">
						<div>
							<img className="h-16" src={Logo} alt="" />
						</div>
						<ul
							className={`md:flex text-fuchsia-900 font-bold top-16 bg-gray justify-end nav-resize  md:static  absolute duration-500 ${
								open ? "left-10" : "left-[-120px]"
							}`}
						>
							{menu}
						</ul>
						<div
							onClick={() => setOpen(!open)}
							className="h-6 w-6 md:hidden text-white sm:mx-6"
						>
							{open ? <XMarkIcon /> : <Bars3Icon />}
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
