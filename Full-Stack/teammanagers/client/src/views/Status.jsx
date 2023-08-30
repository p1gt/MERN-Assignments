import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Status = props => {
	const { game } = props;
	const [players, setPlayers] = useState([]);
	const [status, setStatus] = useState('Undecided');
	
	useEffect(() => {
		axios.get('http://localhost:8000/api/players')
			.then(res => setPlayers(res.data))
			.catch(err => console.log(err));
	}, []);
	
	const changeStatus = id => {
		axios.patch(`http://localhost:8000/api/players/${id}`, {
				statuses: status,
			})
			.then(res => {
				// Update only the changed player's status and keep others unchanged
				setPlayers(prevPlayers => {
					const updatedPlayers = prevPlayers.map(player => {
						if (player._id === id) {
							return { ...player, statuses: status };
						}
						return player;
					});
					return updatedPlayers;
				});
			})
			.catch(err => console.log(err));
	};
	
	return (
		<>
			<h2>Players Status</h2>
			<h3>
				<Link to={'/status/game/1'}>Game 1</Link> |
				<Link to={'/status/game/2'}>Game 2</Link> |
				<Link to={'/status/game/3'}>Game 3</Link>
			</h3>
			<table>
				<thead>
				<tr>
					<th>Player</th>
					<th>Actions</th>
				</tr>
				</thead>
				<tbody>
				{players.map((player, index) => {
					return (
						<tr key={index}>
							<td>{player.name}</td>
							<td>
								<button
									className={player.statuses === 'Playing' ? 'green' : player.statuses === 'Not Playing' ? 'red' : 'yellow'}
									onClick={e => {
										setStatus('Playing');
										changeStatus(player._id);
									}}
								>
									Playing
								</button>
								<button
									className={player.statuses === 'Not Playing' ? 'red' : player.statuses === 'Playing' ? 'green' : 'yellow'}
									onClick={e => {
										setStatus('Not Playing');
										changeStatus(player._id);
									}}
								>
									Not Playing
								</button>
								<button
									className={player.statuses === 'Undecided' ? 'yellow' : player.statuses === 'Playing' ? 'green' : 'red'}
									onClick={e => {
										setStatus('Undecided');
										changeStatus(player._id);
									}}
								>
									Undecided
								</button>
							</td>
						</tr>
					);
				})}
				</tbody>
			</table>
		</>
	);
};

export default Status;
