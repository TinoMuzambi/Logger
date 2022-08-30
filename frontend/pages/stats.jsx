import { useEffect, useState } from "react";
import moment from "moment"


import { API_BASE_URL, PRODUCTS } from "../utils";

const Stats = () => {
	const [feasibilities, setFeasibilities] = useState([])
	const [max, setMax] = useState("")
	const feasibilitiesByProduct = {}

	const getFeasibilities = async () => {
		const res = await fetch(`${API_BASE_URL}/api/feasibilities`)
		const data = await res.json()

		console.log(data);

		data.forEach((feasibility) => {
			feasibilitiesByProduct[feasibility.product] = feasibilitiesByProduct[feasibility.product] ? feasibilitiesByProduct[feasibility.product] + 1 : 1 
		})
		let max = -1;
		Object.keys(feasibilitiesByProduct).forEach((product) => {
			if (feasibilitiesByProduct[product] > max) {
				max = feasibilitiesByProduct[product]
				setMax(product)
			} 
		});
		console.log({feasibilitiesByProduct});
		setFeasibilities(data)
	}

	useEffect(() => {
		getFeasibilities()
	}, [])


	return (
		<main>
			<h1>Stats</h1>

			{feasibilities.length ?
			<div className="container">
				<p className="stat">Total number of sites processed: <span>{feasibilities.reduce((acc, feasibility) => feasibility.numberOfSites + acc, 0)}</span></p>

				<p className="stat">Average turn around: <span>{feasibilities.reduce((acc, feasibility) => moment(feasibility?.dateCompleted ? feasibility.dateCompleted : moment()).diff(moment(feasibility.dateReceived), "days") + acc,0)/feasibilities.length} days</span></p>

				<p className="stat">Most popular product: <span>{max}</span></p>
			</div> 
			: null}
		</main>
	);
};

export default Stats;
