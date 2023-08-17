import React, { useState } from 'react';

const NavigationBar = () => {
	const [resource, setResource] = useState('people');
	const [id, setId] = useState('');
	const handleSearch = () => {
		if (resource === 'people') {
			window.location.href = `/people/${id}`;
		} else if (resource === 'planets') {
			window.location.href = `/planets/${id}`;
		}
	};
	
	return (
		<div>
			<select value={resource} onChange={(e) => setResource(e.target.value)}>
				<option value="people">People</option>
				<option value="planets">Planets</option>
			</select>
			<input
				type="number"
				value={id}
				onChange={(e) => setId(e.target.value)}
				placeholder="Enter ID"
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default NavigationBar;
