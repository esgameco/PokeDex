import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Pokemon.css"
import "../../styles/Type.css"

const BASE_URL = "http://127.0.0.1:5000";
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
    const { pokemonName } = useParams<{ pokemonName: string }>();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [abilities, setAbilities] = useState<Ability[]>([]);
    const [type, setType] = useState<Type[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch(`http://127.0.0.1:5000/api/pokemon/ditto`);
                const response = await fetch(`${BASE_URL}/api/pokemon/${pokemonName}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();

                setPokemon(data);
                setAbilities(data.abilities);
                setType(data.types);

            } catch (error) {
                console.error("API request failed", error);
            }
        };
        fetchData();
    }, []);

    if (pokemon == null) {
        return (
            <>
                <div className="loading-message">Searching for Pokemon Data</div>
            </>);
    } else if (pokemon.name == null) {
        return (
            <>
                <div className="error-message">Pokemon could not be found</div>
            </>);
    } else {
        return (
            <div className="container">
                <div className="basic-info-container">
                    <h1>{pokemon?.name}</h1>
                    <ul className="type-text">Type:
                        {type.map((t, index) => (

                            <a className={`type-${t.name.toLowerCase()}`} key={index} href={`/type/${t.name}`}>{t.name.toUpperCase()}</a>

                        ))}
                    </ul>
                    <div>
                        <img src={`${pokemon.image}`} />
                    </div>
                    <h4>Abilities:</h4>
                    {abilities.map((ability, index) => (
                        <li className="no-bullets" key={ability.id | index}>
                            {index + 1}. <a className="ability" href={`/ability/${ability.name}`} > {ability.name}</a>
                            - {ability.effect}
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

            </div>
        );
    }
}

export default PokemonPage;