import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
	const { id } = useParams();
	const [character, setCharacter] = useState(null);
	character.gender = undefined;
	character.mass = undefined;
	const [homeworld, setHomeworld] = useState(null);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		fetch(`https://swapi.dev/api/people/${id}`)
			.then((response) => response.json())
			.then((data) => {
				data.homeworld = undefined;
				setCharacter(data);
				fetch(data.homeworld)
					.then((response) => response.json())
					.then((homeworldData) => setHomeworld(homeworldData))
					.catch((error) => setError(error.message));
			})
			.catch((error) => setError(error.message));
	}, [id]);
	
	if (error) {
		return (
			<div>
				<p>Error: {error}</p>
			</div>
		);
	}
	
	return (
		<div>
			{character && (
				<div>
					<h2>{character.name}</h2>
					<p>Height: {character.height}</p>
					<p>Mass: {character.mass}</p>
					<p>Gender: {character.gender}</p>
					{homeworld && (
						<p>
							Homeworld: <a href={homeworld.url}>{homeworld.name}</a>
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default CharacterDetail;
