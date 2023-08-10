import './App.css';
import PersonCard from './components/PersonCard';
function App() {
    return (
        <div className="App">
            <PersonCard firstName="dew" lastName="i forgor" age={19} hairColor="Orange"/>
            <PersonCard firstName="hazem" lastName="hegazy" age={17} hairColor="Black"/>
        </div>
    );
}

export default App;
