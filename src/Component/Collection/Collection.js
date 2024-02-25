import React, { useState } from "react";
import "./Collection.css";
import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const Collection = () => {
	const [gender, setGender] = useState("");

	const handleFormData = (e) => {
		e.preventDefault();
		const form = e.target;
		// console.log(form);

		const name = form.name.value;
		const company = form.company.value;
		const gender = form.gender.value;
		const age = form.age.value;
		const balance = form.balance.value;
		const address = form.address.value;
		const email = form.email.value;
		const image = form.image.value;
		const phoneNumber = form.phone.value;
		const currentAddress = form.currentAddress.value;
		const addProduct = {
			name: name,
			company: company,
			gender: gender,
			age: age,
			balance: balance,
			address: address,
			picture: image,
			phone: phoneNumber,
			email: email,
			currentAddress: currentAddress,
		};

		fetch("https://practice-voluteer-server.vercel.app/addProduct", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(addProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) alert("Add Product successfully");
				form.reset();

				console.log(data);
			})
			.catch((er) => console.error(er));
	};

	const handleGenderChange = (e) => {
		setGender(e.target.value);
	};
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
							Service form
						</h2>

						<form onSubmit={handleFormData}>
							<div className="grid grid-cols-2 gap-4">
								<label className="block ">
									<span className="block text-xl pb-2 font-medium text-white">
										Name
									</span>
									<input
										name="name"
										type="text"
										className="peer text-indigo-950 p-4 rounded-l-lg rounded-r-lg w-full font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
								<label className="block ">
									<span className="block text-xl pb-2 font-medium text-white">
										Company
									</span>
									<input
										name="company"
										type="text"
										className="peer text-indigo-950 p-4  w-full  rounded-l-lg rounded-r-lg  font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
							</div>

							<div className="grid grid-cols-3 gap-4">
								<label className="block">
									<span className="block text-xl pb-2 font-medium text-white">
										Gender
									</span>
									<input
										type="text"
										name="gender"
										className="peer text-indigo-950 w-full p-4 rounded-l-lg rounded-r-lg font-medium text-xl"
										value={gender}
										onChange={handleGenderChange}
									/>
									{gender &&
										!["male", "female", "other"].includes(
											gender.toLowerCase()
										) && (
											<p className="mt-2 text-indigo-950 text-sm">
												Please provide a valid gender.
											</p>
										)}
								</label>
								<label className="block">
									<span className="block text-xl pb-2 font-medium text-white">
										Age
									</span>
									<input
										name="age"
										type="text"
										className="peer text-indigo-950 w-full p-4  rounded-l-lg rounded-r-lg font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
								<label className="block">
									<span className="block text-xl pb-2 font-medium text-white">
										Balance
									</span>
									<input
										type="text"
										name="balance"
										className="peer text-indigo-950  w-full p-4  rounded-l-lg rounded-r-lg font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<label className="block ">
									<span className="block text-xl pb-2 font-medium text-white">
										Email
									</span>
									<input
										type="email"
										name="email"
										className="peer text-indigo-950 p-4 rounded-l-lg rounded-r-lg w-full font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
								<label className="block ">
									<span className="block text-xl pb-2 font-medium text-white">
										Image Url
									</span>
									<input
										type="text"
										name="image"
										className="peer text-indigo-950 p-4  w-full  rounded-l-lg rounded-r-lg  font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
							</div>
							<div className="grid grid-cols-3 gap-4">
								<label className="block">
									<span className="block text-xl pb-2 font-medium text-white">
										Address
									</span>
									<input
										type="text"
										name="address"
										className="peer text-indigo-950  w-full p-4  rounded-l-lg rounded-r-lg font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
								<label className="block">
									<span className="block text-xl pb-2 font-medium text-white">
										Phone Number
									</span>
									<input
										type="text"
										name="phone"
										className="peer text-indigo-950 w-full p-4  rounded-l-lg rounded-r-lg font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
								<label className="block">
									<span className="block text-xl pb-2 font-medium text-white">
										Current Address
									</span>
									<input
										type="text"
										name="currentAddress"
										className="peer text-indigo-950  w-full p-4  rounded-l-lg rounded-r-lg font-medium text-xl"
									/>
									<p className="mt-2 invisible peer-invalid:visible text-indigo-950 text-sm">
										Please provide a valid email address.
									</p>
								</label>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="btn bg-indigo-900 text-white inline-block my-2 hover:text-indigo-900  w-60"
								>
									Secondary
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collection;
