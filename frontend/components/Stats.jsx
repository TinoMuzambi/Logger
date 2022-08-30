import { useEffect, useState } from "react";
import moment from "moment"

const Stats = ({ feasibilities }) => {
	
	const [max, setMax] = useState("")
	const feasibilitiesByProduct = {}

	useEffect(() => {
		feasibilities.forEach((feasibility) => {
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
	}, [feasibilities])


	return (
		<main>
			{feasibilities.length ?
			<div className="container">
				<p className="stat">Total number of sites processed: <span>{feasibilities.reduce((acc, feasibility) => feasibility.numberOfSites + acc, 0)}</span></p>

				<p className="stat">Average turn around: <span>{(feasibilities.reduce((acc, feasibility) => moment(feasibility?.dateCompleted ? feasibility.dateCompleted : moment()).diff(moment(feasibility.dateReceived), "days") + acc,0)/feasibilities.length).toFixed(2)} days</span></p>

				<p className="stat">Most popular product: <span>{max}</span></p>
			</div> 
			: null}
		</main>
	);
};

export default Stats;
