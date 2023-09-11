import React from "react";

const Card = ({ singleData }) => {
	const { picture, name, email, phone } = singleData;
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure>
				<img src={picture} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">Name: {name}</h2>
				<div>
					<p className="text-xl">Email: {email}</p>
					<p className="text-xl">Phone: {phone}</p>
				</div>
				<div className="card-actions justify-center">
					<button className="btn btn-primary">Get Service</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
