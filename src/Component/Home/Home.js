import React from "react";
import "./Home.css";
import Cards from "../Cards/Cards";

const Home = () => {
	return (
		<div className="bg-image relative h-full py-36">
			<div className="flex justify-center items-center">
				<div className="w-1/2 bg-overlay home-title">
					<h2 className="text-3xl font-bold text-center text-white py-5 opacity-8">
						What's volunteer service you needed
					</h2>
				</div>
			</div>
			<Cards></Cards>
		</div>
	);
};

export default Home;
