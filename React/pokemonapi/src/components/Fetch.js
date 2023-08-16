import {useState} from "react";

const Fetch = () => {
    const [ pokemons, setPokemons ] = useState([]);
    
    const fetchPokemons = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => setPokemons(response.results))
            .catch(err => console.log(err));
    };
    
    return (
        <>
            <button onClick={fetchPokemons}>Fetch Pokemons</button>
            <ol>{
                pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
            }</ol>
        </>
    );
};

export default Fetch;
