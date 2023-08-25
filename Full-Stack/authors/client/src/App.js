import './App.css';
import { Route, Routes } from "react-router-dom";
import Create from "./views/Create";
import List from "./views/List";
import React from "react";
import Retrieve from "./views/Retrieve";
import Edit from "./views/Edit";

const App = () => {
	return (
		<div className="App">
			<h1>Favorite Authors</h1>
			<Routes>
				<Route path={'*'} element={ <List/> }/>
				<Route path={ "/authors/new" } element={ <Create/> }/>
				<Route path={ "/authors/:id" } element={ <Retrieve/> }/>
				<Route path={ "/authors/:id/edit" } element={ <Edit/> }/>
			</Routes>
		</div>
	);
};

export default App;
