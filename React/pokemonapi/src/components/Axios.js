import {useState} from "react";
import axios from "axios";

const Axios = () => {
    const [ pokemon, setPokemon ] = useState([]);
    
    const fetchPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => setPokemon(response.data.results))
            .catch(err => console.log(err));
    };
    
    return (
        <>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            <ol>{
                pokemon.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)
            }</ol>
        </>
    );
};

export default Axios;
