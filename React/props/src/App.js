import './App.css';
import PersonCard from './components/PersonCard';
function App() {
    return (
        <div className="App">
            <PersonCard firstName="dew" lastName="i forgor" age={19} hairColor="Orange"/>
            <PersonCard firstName="hazem" lastName="hegazy" age={17} hairColor="Black"/>
            <PersonCard firstName="joe" lastName="mama" age={69} hairColor="Brown"/>
            <PersonCard firstName="joe" lastName="biden" age={78} hairColor="Gray"/>
        </div>
    );
}

export default App;
