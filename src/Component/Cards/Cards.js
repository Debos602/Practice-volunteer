import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

/*
count 
perpage (size):4

pages: count /perPage
currentPage: (page)


*/

const Cards = () => {
	const [data, setData] = useState([]);
	const [count, setCount] = useState();
	const [filteredData, setFilteredData] = useState([]);
	const [searchText, setSearchText] = useState();

	const [page, setPage] = useState(0);
	const [size, setSize] = useState(4);

	const pages = count !== undefined && count > 0 ? Math.ceil(count / size) : 0;
	// console.log(pages);

	useEffect(() => {
		fetch(`https://practice-voluteer-server.vercel.app/services?page=${page}&size=${size}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setFilteredData(data?.services);
				setData(data?.services);
				setCount(data?.count);
			});
	}, [page, size]);

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
				{filteredData?.map((singleData) => (
					<Card key={singleData._id} singleData={singleData}></Card>
				))}
			</div>
			<div className="pagination text-center">
				<p className="text-2xl mt-2">
					Currently Selected page: {page} and {size}
				</p>
				{[...Array(pages).keys()]?.map((number) => (
					<button
						className={`mx-2 hover:bg-white hover:text-indigo-950 hover:border-2 border-indigo-950 transition-shadow ${
							page === number && "selected"
						}`}
						key={number}
						onClick={() => setPage(number)}
					>
						{number + 1}
					</button>
				))}

				<select onChange={(event) => setSize(event.target.value)}>
					<option value="4" selected>
						4
					</option>
					<option value="6">6</option>
					<option value="10">10</option>
					<option value="5">5</option>
				</select>
			</div>
		</div>
	);
};

export default Cards;
