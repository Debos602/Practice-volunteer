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

			const currentUser = {
				email: user.email,
			};

			console.log(currentUser);

			//get jwt token
			fetch("https://practice-voluteer-server.vercel.app/jwt", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(currentUser),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					localStorage.setItem("volunteer-token", data.token);
					console.log(data.token);
					navigate(from, { replace: true });
				});
			// console.log(user);

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
		<div className="hero bg-indigo-950">
			<div className="hero-content flex-col w-1/2 mt-28">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl text-white">Login now!</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-indigo-900 opacity-2 ">
					<form onSubmit={handleLogIn} className="card-body ">
						<div className="form-control">
							<label className="label">
								<span className="label-text text-white">Email</span>
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
								<span className="label-text text-white">Password</span>
							</label>
							<input
								name="password"
								type="password"
								placeholder="password"
								className="input input-bordered"
							/>
							<label className="label">
								<Link
									href="#"
									className="label-text-alt link link-hover text-white"
								>
									Forgot password?
								</Link>
							</label>
						</div>
						<div className="form-control mt-4">
							<button className="btn btn-primary text-white">Login</button>
						</div>
						<div className="text-center py-2">
							<span>
								Not Registered{" "}
								<Link to="/signup" className="text-amber-700 font-bold text-xl">
									Sign Up
								</Link>
							</span>
							<br />
							<p>
								open with{" "}
								<span
									onClick={handleGoogleLogIn}
									className="text-amber-700 font-bold text-xl"
								>
									Google
								</span>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
