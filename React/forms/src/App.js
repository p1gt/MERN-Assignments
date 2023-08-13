import './App.css';
import UserForm from "./components/UserForm";
import MovieForm from "./components/MovieForm";

const App = () => {
    return (
        <div className="App">
            <UserForm/>
            <MovieForm/>
        </div>
    );
};

export default App;
