import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
	const [ products, setProducts ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);
	
	useEffect(() => {
		axios.get("http://localhost:8000/api/products")
			.then(res => {
				setProducts(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [ products ]);
	
	const deleteProduct = id => {
		axios.delete(`http://localhost:8000/api/products/${ id }`)
			.then(() => setProducts(products.filter(product => product._id !== id)))
			.catch(err => console.log(err));
	}
	
	return (
		<>
			<button><Link to={"/products/new"}>create product</Link></button>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{
					loaded && products.map((product, index) => {
						return (
							<tr key={ index }>
								<td><Link to={ `/products/${product._id}` }>{ product.title }</Link></td>
								<td>{ product.price }</td>
								<td>
									<button><Link to={ `/products/${product._id}/edit` }>edit</Link></button>
									<button onClick={ () => { deleteProduct(product._id) } }>delete</button>
								</td>
							</tr>
						);
					})
				}</tbody>
			</table>
		</>
	);
};

export default Main;
