import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("volunteer.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="grid grid-cols-4 gap-5 w-full mt-32">
			{data.map((singleData) => (
				<Card key={singleData._id} singleData={singleData}></Card>
			))}
		</div>
	);
};

export default Cards;
