import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const navigate = useNavigate();
	
	const submitHandler = event => {
		event.preventDefault();
		axios.post("http://localhost:8000/api/products", {
				title: title,
				price: price,
				description: description
			})
			.then(() => {
				setTitle("");
				setPrice(0);
				setDescription("");
			})
			.catch(err => console.log(err));
		navigate("/");
	}
	
	return (
		<>
			<form onSubmit={ submitHandler }>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input type="text" className="form-control" id="title" onChange={event => setTitle(event.target.value)} value={title.toString()}/>
				</div>
				<div className="form-group">
					<label htmlFor="price">Price</label>
					<input type="number" className="form-control" id="price" onChange={event => setPrice(parseInt(event.target.value))} value={price.toString()}/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input type="text" className="form-control" id="description"  onChange={event => setDescription(event.target.value)} value={description.toString()}/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	)
}

export default CreateForm;