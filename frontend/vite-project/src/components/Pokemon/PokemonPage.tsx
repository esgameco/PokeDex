import React, { useEffect, useState } from "react";
import { Alert, InputGroup, FormControl, Button } from "react-bootstrap";
import Navbar from "../Navbar";

const temp = "http://localhost:5173/api/pokemon/";
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
const URL = "https://jsonplaceholder.typicode.com/todos/1";
const some = "api/pokemon/";

function PokemonPage() {
    const [pokemon, setPokemon] = useState("");
    const [ability, setAbility] = useState([]);
    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${temp}ditto`);
            const data = await response.json();
            console.log(data);
            setPokemon(data.name);
            setAbility(data.abilities[1].ability)
            setAbilities(data.abilities[0].ability)
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1>ditto: {pokemon}</h1>
                <ul>{ability.name}
                </ul>
            </div>
        </>
    );
}

export default PokemonPage;