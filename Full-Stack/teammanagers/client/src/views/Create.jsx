import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Create = () => {
	const [ name, setName ] = useState('');
	const [ position, setPosition ] = useState('');
	const [ errors, setErrors ] = useState([]);
	const navigate = useNavigate();
	
	const handleSubmit = e => {
		e.preventDefault()
		axios.post('http://localhost:8000/api/players', {
			name,
			position
		})
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
			<h1>Add Player</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Player Name: </label>
					<input type="text" onChange={e => setName(e.target.value)} value={name} />
				</div>
				<div>
					<label>Preferred Position: </label>
					<input type="text" onChange={e => setPosition(e.target.value)} value={position} />
				</div>
				{ name.length < 2 ? <input type="submit" value="Add Player" disabled /> : <input type="submit" value="Add Player" /> }
			</form>
			{
				errors.map((err, index) => <p key={index}>{err}</p>)
			}
		</>
	);
};

export default Create;
