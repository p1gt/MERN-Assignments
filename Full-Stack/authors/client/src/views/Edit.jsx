import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [ author, setAuthor ] = useState({});
	const [ loaded, setLoaded ] = useState(false);
	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/authors/${id}`)
			.then(res => {
				setAuthor(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [id]);
	
	const submitHandler = e => {
		e.preventDefault();
		axios.patch(`http://localhost:8000/api/authors/${id}`, author)
			.then(res => {
				console.log(res);
				navigate("/");
			})
			.catch(err => console.log(err));
	}
	
	return (
		<>
			<h1>Edit Author</h1>
			{loaded && (
				<form onSubmit={submitHandler}>
					<div className="form-group">
						<label>Name:</label>
						<input type="text" name="name" id="name" className="form-control" value={author.name} onChange={e => setAuthor({ ...author, name: e.target.value })} />
					</div>
					<div className="form-group">
						<button className={"btn btn-primary"} onClick={() => navigate('/')}>cancel</button>
						<button type="submit" className="btn btn-primary">Update</button>
					</div>
				</form>
			)}
		</>
	);
}

export default Edit;