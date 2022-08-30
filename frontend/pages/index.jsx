import { useEffect, useState } from "react";

import { API_BASE_URL, PRODUCTS } from "../utils";

const Home = () => {
	const [feasibilities, setFeasibilities] = useState([])
	const [formData, setFormData] = useState({
		name: "",
		numberOfSites: "",
		product: "",
		dateReceived: "",
		dateCompleted: "",
	})

	useEffect(() => {
		const getFeasibilities = async () => {
			const res = await fetch(`${API_BASE_URL}/api/feasibilities`)
			const data = await res.json()

			setFeasibilities(data)
		}
		getFeasibilities()
	}, [])

	const submitHandler = (e) => {
		e.preventDefault()
	}

	return (
		<main>
			<h1>Logger</h1>

			<div className="form-holder">
				<h2>Record new Feasibility</h2>
				<form onSubmit={submitHandler}>
					<div className="input-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" required />
					</div>
					<div className="input-group">
						<label htmlFor="numberOfSites">Number of Sites</label>
						<input type="number" id="numberOfSites" required />
					</div>
					<div className="input-group">
						<label htmlFor="product">Product</label>
						<select id="product" required>
							{PRODUCTS.map((product, key) => (
								<option value={product} key={key}>{product}</option>
							))}
						</select>
					</div>
					<div className="input-group">
						<label htmlFor="dateReceived">Date Received</label>
						<input type="date" id="dateReceived" required />
					</div>
					<div className="input-group">
						<label htmlFor="dateCompleted">Date Completed</label>
						<input type="date" id="dateCompleted" />
					</div>
					<button type="submit">Create new Feasibility</button>
				</form>
			</div>
			<div className="feasibilities">
			<h2>My Feasibilities</h2>
				{feasibilities.map((feasibility, key) => (
					<div className="feasibility" key={key}>
						<div className="entry">
							<h3>Name:</h3>
							<p>{feasibility.name}</p>
						</div>
						<div className="entry">
							<h3>Number of sites:</h3>
							<p>{feasibility.numberOfSites}</p>
						</div>
						<div className="entry">
							<h3>Product:</h3>
							<p>{feasibility.product}</p>
						</div>
						<div className="entry">
							<h3>Date Received:</h3>
							<p>{feasibility.dateReceived}</p>
						</div>
						<div className="entry">
							<h3>Date Completed:</h3>
							<p>{feasibility?.dateCompleted}</p>
						</div>
					</div>
				))}

			</div>
		</main>
	);
};

export default Home;
