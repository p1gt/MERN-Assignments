import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlanetDetail = () => {
	const { id } = useParams();
	const [planet, setPlanet] = useState(null);
	planet.population = undefined;
	planet.terrain = undefined;
	planet.climate = undefined;
	const [error, setError] = useState(null);
	
	useEffect(() => {
		fetch(`https://swapi.dev/api/planets/${id}`)
			.then((response) => response.json())
			.then((data) => setPlanet(data))
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
			{planet && (
				<div>
					<h2>{planet.name}</h2>
					<p>Climate: {planet.climate}</p>
					<p>Terrain: {planet.terrain}</p>
					<p>Population: {planet.population}</p>
				</div>
			)}
		</div>
	);
};

export default PlanetDetail;
