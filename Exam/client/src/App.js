import './App.css';
import List from "./views/List";
import {Route, Routes} from "react-router-dom";
import Create from "./views/Create";
import Show from "./views/Show";
import Update from "./views/Update";

const App = () => {
    return (
        <div className={"App"}>
            <div className={"App-header"}>
                <h1>store finder</h1>
                <Routes>
                    <Route path={ "/" } element={ <List/> } />
                    <Route path={ "/add" } element={ <Create/> } />
                    <Route path={ "/:id" } element={ <Show/> } />
                    <Route path={ "/:id/edit" } element={<Update/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
