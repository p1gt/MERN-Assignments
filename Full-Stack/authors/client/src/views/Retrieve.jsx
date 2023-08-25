import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Retrieve = () => {
	const [ author, setAuthor ] = useState({});
	const [ loaded, setLoaded ] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/authors/${id}`)
			.then(res => {
				setAuthor(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [ id ]);
	
	const deleteAuthor = id => {
		axios.delete(`http://localhost:8000/api/authors/${id}`)
			.then(() => navigate('/'))
			.catch(err => console.log(err));
	};
	
	return (
		<>
			<h2>author info:</h2>
			{
				loaded &&
				<div>
					<p>name: { author.name }</p>
					<button className="btn"><Link to={`/authors/${author._id}/edit`}>edit</Link></button>
					<button className="btn btn-danger" onClick={ () => deleteAuthor(author._id) }>delete</button>
				</div>
			}
		</>
	);
}

export default Retrieve;