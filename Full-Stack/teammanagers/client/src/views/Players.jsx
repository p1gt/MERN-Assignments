import { Link, Route, Routes } from "react-router-dom";
import List from "./List";
import Create from "./Create";

const Players = () => {
	return (
		<div>
			<h3><Link to={ '/players/list' }>List</Link> | <Link to={ '/players/add' }>Add Player</Link></h3>
			<Routes>
				<Route path={ '/list' } element={ <List/> }/>
				<Route path={ '/add' } element={ <Create/> }/>
			</Routes>
		</div>
	);
};

export default Players;
