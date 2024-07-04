import React, { useEffect, useState } from "react";
import "../../styles/PokemonPage.css"


const BASE_URL = "http:localhost:5000";
const URL = "https://jsonplaceholder.typicode.com/todos/1";


interface Ability {
    id: number;
    name: string;
    effect: string;
}

interface Type {
    id: number;
    name: string;
}

interface Stats {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    height: number;
    weight: number;
}

interface Pokemon {
    name: string;
    abilities: Ability[];
    id: number;
    hp: number;
    type: Type[];
    stats: Stats;
    height: number;
    weight: number;
    image: string;
}


function PokemonPage() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [abilities, setAbilities] = useState<Ability[]>([]);
    const [type, setType] = useState<Type[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/pokemon/ditto`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                setPokemon(data);
                setAbilities(data.abilities);
                setType(data.type);
            } catch (error) {
                console.error("API request failed", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="basic-info-container">
                <h1>ditto: {pokemon?.name}</h1>
                <ul>Type:
                    {/* {type.map((t, index) => (
                        <li className="no-bullets" key={type.id | index}>
                            <a href={`/type/${type.name}`} > {type.name}</a>
                        </li>
                    ))} */}
                </ul>
                <div>Abilities</div>
                {abilities.map((ability, index) => (
                    <li className="no-bullets" key={ability.id | index}>
                        {index + 1}. <a href={`/ability/${ability.name}`} > {ability.name}</a>
                    </li>
                ))}
            </div >
            <div className="base-stats-container">
                <h1>BASE STATS</h1>
                <ul className="no-bullets">
                    <li>HP: {pokemon?.stats.hp}</li>
                    <li>Atack: {pokemon?.stats.attack}</li>
                    <li>Defense: {pokemon?.stats.defense}</li>
                    <li>Sp. Atk: {pokemon?.stats.specialAttack}</li>
                    <li>Sp. Def: {pokemon?.stats.specialDefense}</li>
                    <li>Speed: {pokemon?.stats.speed}</li>
                </ul>
            </div>

        </>
    );
}

export default PokemonPage;