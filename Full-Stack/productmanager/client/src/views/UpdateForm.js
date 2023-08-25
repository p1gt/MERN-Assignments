import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState({});
	const [loaded, setLoaded] = useState(false);
	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/products/${ id }`)
			.then(res => {
				setProduct(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [id]);
	
	const updateProduct = e => {
		e.preventDefault();
		
		axios.patch(`http://localhost:8000/api/products/${ id }`, product)
			.then(() => navigate("/"))
			.catch(err => console.log(err));
	};
	
	return (
		<>
			<h1>Update this product</h1>
			{ loaded && (
				<form onSubmit={ updateProduct }>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input
							type="text"
							className="form-control"
							name="title"
							onChange={ e => setProduct({ ...product, title: e.target.value }) }
							value={ product.title }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="price">Price</label>
						<input
							type="number"
							className="form-control"
							name="price"
							onChange={ e => setProduct({ ...product, price: e.target.value }) }
							value={ product.price }
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<textarea
							className="form-control"
							name="description"
							onChange={ e => setProduct({ ...product, description: e.target.value }) }
							value={ product.description }
						/>
					</div>
					<button className="btn btn-primary">Update</button>
				</form>
			) }
		</>
	);
};

export default UpdateForm;
