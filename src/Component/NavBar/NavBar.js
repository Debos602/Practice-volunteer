import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logos/logo.png";
import "./NavBar.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const [scrolling, setScrolling] = useState(false);

	const handleLogOut = (e) => {
		e.preventDefault();
		logOut()
			.then(() => {})
			.catch((error) => console.error(error));
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const menu = (
		<>
			<li>
				<Link className="px-4" to="/">
					Home
				</Link>
			</li>
			<li>
				<Link className="px-4" to="/members">
					Members
				</Link>
			</li>

			<li>
				<Link className="px-4" to="/collection">
					Collection
				</Link>
			</li>
			<li>
				<Link className="px-4" to="/userlist">
					User
				</Link>
			</li>
			<li>
				{user?.uid ? (
					<Link className="px-4" onClick={handleLogOut} to="/login">
						LogOut
					</Link>
				) : (
					<Link className="px-4" to="/login">
						LogIn
					</Link>
				)}
			</li>
		</>
	);

	return (
		<div
			className={`fixed top-0 w-full z-10 ${scrolling ? "bg-indigo-900" : ""}`}
		>
			<div className="main-nav">
				<nav className="py-3 md:container md:px-20 mx-auto">
					<div className="flex justify-between items-center w-full">
						<div>
							<img
								className=" bg-white rounded-full object-contain h-20 w-20 p-4 border-2 border-blue-800	"
								src={Logo}
								alt=""
							/>
						</div>
						<ul
							className={`md:flex text-white font-semibold text-2xl  top-16 justify-end nav-resize  md:static  absolute duration-500 ${
								open ? "right-10" : "right-[-140px]"
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
