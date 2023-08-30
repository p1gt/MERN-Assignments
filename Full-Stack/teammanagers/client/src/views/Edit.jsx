import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
	const { id } = useParams();
	const [ player, setPlayer ] = useState({});
	const [ errors, setErrors ] = useState([]);
	const navigate = useNavigate();
	const [ loaded, setLoaded ] = useState(false);
	
	useEffect(() => {
		axios.get(`http://localhost:8000/api/players/${id}`)
			.then(res => {
				setPlayer(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
	}, [id]);
	
	const handleSubmit = e => {
		e.preventDefault();
		axios.patch(`http://localhost:8000/api/players/${id}`, player)
			.then(() => navigate('/players/list'))
			.catch(err => {
				const errorResponse = err.response.data.errors;
				const errorArr = [];
				for (const key of Object.keys(errorResponse)) {
					errorArr.push(errorResponse[key].message);
				}
				setErrors(errorArr);
			});
	};
	
	return (
		<>
			<h1>Edit Player</h1>
			{ loaded && (<form onSubmit={ handleSubmit }>
				<div>
					<label>Player Name: </label>
					<input type="text" onChange={ e => setPlayer({ ...player, name: e.target.value }) }
					       value={ player.name }/>
				</div>
				<div>
					<label>Preferred Position: </label>
					<input type="text" onChange={ e => setPlayer({ ...player, position: e.target.value }) }
					       value={ player.position }/>
				</div>
				<button>Update Player</button>
			</form>) }
			{
				errors.map((err, index) => <p key={index}>{err}</p>)
			}
		</>
	);
};

export default Edit;
