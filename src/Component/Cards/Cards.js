import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [searchText, setSearchText] = useState();
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => {
				console.log("data holo",data);
				setFilteredData(data);
				setData(data);
			});
	}, []);

	const handleSearchInputChange = (e) => {
		e.preventDefault();
		const searchValue = e.target.value;
		// console.log(searchValue);
		setSearchText(searchValue);

		const filteredResult = data.filter((singleData) =>
			singleData.name.toLowerCase().includes(searchValue.toLowerCase())
		);
		setFilteredData(filteredResult);

		//Reset searchValue to clear input text box
		if (filteredResult.length >= 1) {
			setSearchText();
		}
	};
	return (
		<div className="container px-20 m-auto">
			<div className="text-center py-5">
				<input
					type="text"
					placeholder="Search by name ...."
					value={searchText}
					onChange={handleSearchInputChange}
					className="mb-4 p-3 border rounded"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-4  gap-5 w-full ">
				{filteredData.map((singleData) => (
					<Card key={singleData._id} singleData={singleData}></Card>
				))}
			</div>
		</div>
	);
};

export default Cards;
