import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import PlanetDetail from './components/PlanetDetail';
import NavigationBar from './components/NavigationBar';

const App = () => {
	return (
		<>
				<h1>Star Wars API Navigator</h1>
				<NavigationBar />
				<Routes>
					<Route path="/people/:id" element={<CharacterDetail/>}/>
					<Route path="/planets/:id" element={<PlanetDetail/>}/>
					<Route path="/" element={<Home/>}/>
				</Routes>
		</>
	);
};

export default App;
