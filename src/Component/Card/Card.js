import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ singleData }) => {
	// console.log(singleData);
	const { _id, picture, name, email, phone } = singleData;

	const navigate = useNavigate();
	const handleCardData = (id) => {
		navigate(id);
	};

	return (
		<div className="card card-compact bg-indigo-950  shadow-xl ">
			<figure>
				<img className="max-h-44 w-full" src={picture} alt="Shoes" />
			</figure>
			<div className="card-body text-white">
				<h2 className="card-title w-full justify-center">Name: {name}</h2>
				<div>
					<p className="text-base">Email: {email}</p>
					<p className="text-xl">Phone: {phone}</p>
				</div>
				<div className="card-actions justify-center">
					
					<button
						onClick={() => handleCardData(`/services/${_id}`)}
						className="btn btn-primary"
					>
						Get Service
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
