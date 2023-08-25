import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
	const [ product, setProduct ] = useState({});
	const { id } = useParams();
	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/products/${id}`)
			.then(res => setProduct(res.data))
			.catch(err => console.log(err));
	});
	
	return (
		<>
			<h1>{ product.title }</h1>
			<p>Price: ${ product.price }</p>
			<p>Description: { product.description }</p>
		</>
	);
};

export default Product;