import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Players from "./views/Players";
import Status from "./views/Status";

const App = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1><Link to={ '/players/list' }>Manage Players</Link> | <Link to={ '/status/game/1' }>Manage Player Status</Link></h1>
				<Routes>
					<Route path={ '/players/*' } element={ <Players/> }/>
					<Route path={ '/status/game/1' } element={ <Status game={1}/> }/>
					<Route path={ '/status/game/2' } element={ <Status game={2}/> }/>
					<Route path={ '/status/game/3' } element={ <Status game={3}/> }/>
				</Routes>
			</header>
		</div>
	);
};

export default App;
