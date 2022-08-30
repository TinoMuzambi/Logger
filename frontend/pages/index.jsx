import { useEffect, useState } from "react";
import moment from "moment"
import {MdDelete,MdModeEdit} from "react-icons/md"

import { API_BASE_URL, PRODUCTS } from "../utils";
import Stats from "../components/Stats";

const Home = () => {
	const [feasibilities, setFeasibilities] = useState([])
	const [editMode, setEditMode] = useState({state:false, id:""})
	const [formData, setFormData] = useState({
		name: "",
		numberOfSites: "",
		product: "",
		dateReceived: "",
		dateCompleted: "",
	})

	const getFeasibilities = async () => {
		const res = await fetch(`${API_BASE_URL}/api/feasibilities`)
		const data = await res.json()

		console.log(data);
		setFeasibilities(data.sort((a,b) => a.dateReceived.localeCompare(b.dateReceived)))
	}

	useEffect(() => {
		getFeasibilities()
	}, [])

	const submitHandler = async (e) => {
		e.preventDefault()
		try {
			const res = await fetch(`${API_BASE_URL}/api/feasibilities${editMode.state ? `/${editMode.id}` : ""}`, {
				method: editMode.state ? "PUT" : "POST", 
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			})
			const data = await res.json()
			console.log(data);
			if (editMode.state) {
				setEditMode({state: false, id:""}) 
			} 
			getFeasibilities()
			
			alert("Feasibility saved")
			setFormData({
				name: "",
				numberOfSites: "",
				product: "",
				dateReceived: "",
				dateCompleted: "",
			})
		} catch (error) {
			console.error(error);
			alert("Something went wrong...")
		}
	}

	const editHandler = (feasibility) => {
		setEditMode({state:true, id: feasibility._id})
		setFormData({...feasibility, dateReceived: moment(feasibility.dateReceived).format("YYYY-MM-DD"), dateCompleted: feasibility.dateCompleted ? moment(feasibility.dateCompleted).format("YYYY-MM-DD"): ""})
	}

	const deleteHandler = async (id) => {
		if (confirm("Are you sure you want to delete this feasibility?")) {
			try {
				await fetch(`${API_BASE_URL}/api/feasibilities/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})


				alert("Feasibility deleted")
				getFeasibilities()

			} catch (error) {
				console.error(error);
				alert("Something went wrong")
			}
		}
	}

	return (
		<main>
			<h1>Logger</h1>

			<div className="container">
			<div className="form-holder">
				<h2>Record new Feasibility</h2>
				<form onSubmit={submitHandler}>
					<div className="input-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" required value={formData.name} onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))} />
					</div>
					<div className="input-group">
						<label htmlFor="numberOfSites">Number of Sites</label>
						<input type="number" id="numberOfSites" required min={1} value={formData.numberOfSites} onChange={(e) => setFormData((prev) => ({...prev, numberOfSites: e.target.value}))}/>
					</div>
					<div className="input-group">
						<label htmlFor="product">Product</label>
						<select id="product" required value={formData.product} onChange={(e) => setFormData((prev) => ({...prev, product: e.target.value}))}>
							<option value="" disabled>Choose a product</option>
							{PRODUCTS.map((product, key) => (
								<option value={product} key={key}>{product}</option>
							))}
						</select>
					</div>
					<div className="input-group">
						<label htmlFor="dateReceived">Date Received</label>
						<input type="date" id="dateReceived" max={moment().format("YYYY-MM-DD")} required value={formData.dateReceived} onChange={(e) => setFormData((prev) => ({...prev, dateReceived: e.target.value}))} />
					</div>
					<div className="input-group">
						<label htmlFor="dateCompleted">Date Completed</label>
						<input type="date" id="dateCompleted" max={moment().format("YYYY-MM-DD")} value={formData.dateCompleted} onChange={(e) => setFormData((prev) => ({...prev, dateCompleted: e.target.value}))} />
					</div>
					<button type="submit">{editMode.state ? "Update" : "Create new"} Feasibility</button>
				</form>
				<Stats feasibilities={feasibilities} />
			</div>
			<div className="feasibilities">
			<h2>My Feasibilities</h2>
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
							<p>{moment(feasibility.dateReceived).format("DD/MM/YYYY HH:MM")}</p>
						</div>
						<div className="entry">
							<h3>Date Completed:</h3>
							<p>{feasibility?.dateCompleted?moment(feasibility?.dateCompleted).format("DD/MM/YYYY HH:MM"): null}</p>
						</div>
						</div>

						<div className="buttons">
							<button onClick={() => editHandler(feasibility)}><MdModeEdit fill="white" /></button>
							<button onClick={() => deleteHandler(feasibility._id)}><MdDelete fill="white" /></button>
						</div>
					</div>
				))}

			</div>
			</div>
		</main>
	);
};

export default Home;
