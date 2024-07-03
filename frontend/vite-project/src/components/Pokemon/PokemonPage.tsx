import React, { useEffect, useState } from "react";



const BASE_URL = "http:localhost:5000";
const URL = "https://jsonplaceholder.typicode.com/todos/1";


interface Pokemon {
    name: string;
    id: number;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    height: number;
    weight: number;
    image: string;
}


function PokemonPage() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    // const [ability, setAbility] = useState([]);
    // const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/pokemon/ditto`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                } else {
                    console.log("response does works");
                }
                const data = await response.json();
                if (data == null) {
                    console.log("call works");
                }
                console.log("something else");
                console.log(data);
                setPokemon(data);
                // setAbility(data.abilities[1].ability)
                // setAbilities(data.abilities[0].ability)
            } catch (error) {
                console.error("API request failed. Using mock data instead:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1>ditto: {pokemon?.name}</h1>
                <ul>{ }
                </ul>
            </div>
        </>
    );
}

export default PokemonPage;