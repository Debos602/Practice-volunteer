import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
	const { createUser, updateUserData, logOut } = useContext(AuthContext);

	const handleCreateUser = async (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const date = form.date.value;
		const description = form.description.value;
		const password = form.password.value;

		try {
			const result = await createUser(email, password);
			const user = result.user;
			console.log(user);
			await updateProfile(name, date, description);
			await handleSignOut(); // Wait for the sign-out before resetting the form
			form.reset();
		} catch (error) {
			console.error("Error during signup", error);
		}
	};

	const handleOnBlur = (event) => {
		event.preventDefault();
	};

	const updateProfile = async (name, date, description) => {
		const profile = {
			displayName: name,
			date: date,
			description: description,
		};
		try {
			const data = await updateUserData(profile);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignOut = async (e) => {
		if (e) {
			e.preventDefault();
		}

		try {
			await logOut();
			// Additional logic after successful sign-out can be added here
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="hero bg-indigo-950 ">
			<div className="hero-content flex-col w-1/2 my-36">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl text-white font-bold">Sign Up</h1>
				</div>
				<div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-5">
					<form onSubmit={handleCreateUser} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								onBlur={handleOnBlur}
								type="text"
								name="name"
								placeholder="Name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								onBlur={handleOnBlur}
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>

						<div className="form-control">
							<label className="label">
								<span className="label-text">Date</span>
							</label>
							<input
								onBlur={handleOnBlur}
								type="date"
								name="date"
								placeholder="date"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Description</span>
							</label>
							<input
								onBlur={handleOnBlur}
								type="text"
								name="description"
								placeholder="Description"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								onBlur={handleOnBlur}
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Registration</button>
						</div>
						<p className="text-center">
							Go to{" "}
							<Link to="/login" className="text-amber-700 font-bold text-xl">
								login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
