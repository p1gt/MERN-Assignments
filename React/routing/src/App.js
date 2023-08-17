import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Location from "./components/Location";
import Survey from "./components/Survey";
import Variable from "./components/Variable";

const App = () => {
    return (
        <>
            <h1>React Router</h1>
            <p>
            <Link to="/location/seattle">Seattle</Link> | <Link to="/location/chicago">Chicago</Link> | <Link to="/location/burbank">Burbank</Link>
            </p>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/location/:city"} element={<Location/>}/>
                <Route path={"/survey"} element={<Survey/>}/>
                <Route path={"/result"} element={<h1>Result</h1>}/>
                <Route path={"/:variable/:color/:backgroundColor"} element={<Variable/>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </>
    );
};

export default App;
