import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import CreateForm from "./views/CreateForm";
import Product from "./views/Product";
import UpdateForm from "./views/UpdateForm";

function App() {
	return (
		<>
			<Routes>
				<Route path={ "*" } element={ <Main/> }/>
				<Route path={ "/products/new" } element={ <CreateForm/> }/>
				<Route path={ "/products/:id" } element={ <Product/> }/>
				<Route path={ "/products/:id/edit" } element={ <UpdateForm/> }/>
			</Routes>
		</>
	);
}

export default App;
