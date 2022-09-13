import { useEffect, useState } from "react";
import moment from "moment"
import {MdDelete,} from "react-icons/md"

import { API_BASE_URL,  } from "../utils";
import Stats from "../components/Stats";

const Home = () => {
	const [feasibilities, setFeasibilities] = useState([])


	const getFeasibilities = async () => {
		const res = await fetch(`${API_BASE_URL}/api/feasibilities`)
		const data = await res.json()

		console.log(data);
		setFeasibilities(data.sort((a,b) => moment(b.dateReceived) - moment(a.dateReceived)))
	}

	useEffect(() => {
		getFeasibilities()
	}, [])


	return (
		<main>
			<h1>Logger</h1>

			<div className="container">
			<div className="form-holder">
				<h2>Stats</h2>
				<Stats feasibilities={feasibilities} />
			</div>
			<div className="feasibilities">
			<h2>My Feasibilities</h2>
				<div className="feasibilities-wrapper">
				{feasibilities.map((feasibility, key) => (
					<div className="feasibility" key={key}>
						<div className="info">
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
							<p>{moment(feasibility.dateReceived.replace("Z", "")).format("DD/MM/YYYY HH:mm")}</p>
						</div>
						<div className="entry">
							<h3>Date Completed:</h3>
							<p>{feasibility?.dateCompleted ? moment(feasibility?.dateCompleted.replace("Z", "")).format("DD/MM/YYYY HH:mm"): null}</p>
						</div>
						</div>


					</div>
				))}
				</div>

			</div>
			</div>
		</main>
	);
};

export default Home;
