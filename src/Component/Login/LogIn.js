import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
	const { logIn, googleLogin } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	let from = location.state?.from?.pathname || "/";

	const handleLogIn = async (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		try {
			const result = await logIn(email, password);
			const user = result.user;
			// console.log(user);
			navigate(from, { replace: true });
			form.reset();
		} catch (error) {
			console.error("Error during signin", error);
		}
	};

	const handleGoogleLogIn = (event) => {
		event.preventDefault();
		googleLogin()
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="hero bg-slate-400">
			<div className="hero-content flex-col w-1/2 mt-16">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 ">
					<form onSubmit={handleLogIn} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								name="email"
								type="text"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								name="password"
								type="password"
								placeholder="password"
								className="input input-bordered"
							/>
							<label className="label">
								<Link href="#" className="label-text-alt link link-hover">
									Forgot password?
								</Link>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
					<div>
						<p className="text-center">
							Not Registered{" "}
							<Link to="/signup" className="text-amber-700 font-bold text-xl">
								Sign Up
							</Link>
						</p>
						<br />
						<p className="text-center">
							open with{" "}
							<span
								onClick={handleGoogleLogIn}
								className="text-amber-700 font-bold text-xl"
							>
								Google
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
