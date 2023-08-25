import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
	const [ authors, setAuthors ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);
	
	useEffect(() => {
		axios.get('http://localhost:8000/api/authors')
			.then(res => {
				setAuthors(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [ authors ]);
	
	const deleteAuthor = id => {
		axios.delete(`http://localhost:8000/api/authors/${id}`)
			.then(() => setAuthors(authors.filter(author => author._id !== id)))
			.catch(err => console.log(err));
	};
	
	return (
		<>
			<Link to={'/authors/new'}>add an author</Link>
			<h2>we have quotes by:</h2>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>author</th>
						<th>actions available</th>
					</tr>
				</thead>
				<tbody>
					{
						loaded && authors.map((author, index) => (
							<tr key={ index }>
								<td><Link to={`/authors/${author._id}`}>{ author.name }</Link></td>
								<td>
									<button className="btn"><Link to={`/authors/${author._id}/edit`}>edit</Link></button>
									<button className="btn btn-danger" onClick={ () => deleteAuthor(author._id) }>delete</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</>
	);
};

export default List;
