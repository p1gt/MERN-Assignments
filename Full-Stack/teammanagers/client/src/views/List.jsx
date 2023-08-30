import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
	const [ players, setPlayers ] = useState([]);
	const [ loaded, setLoaded ] = useState(false);
	
	useEffect(() => {
		axios.get('http://localhost:8000/api/players')
			.then(res => {
				setPlayers(res.data);
				setLoaded(true);
			})
			.catch(err => console.log(err));
		
	}, [ players ]);
	
	const deletePlayer = _id => {
		axios.delete(`http://localhost:8000/api/players/${_id}`)
			.then(() => setPlayers(players.filter(player => player._id !== _id)))
			.catch(err => console.log(err));
	};
	
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Preferred Position</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						loaded && players.map((player, index) => (
							<tr key={index}>
								<td>{player.name}</td>
								<td>{player.position}</td>
								<td>
									<button onClick={() => deletePlayer(player._id)}>Delete</button>
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