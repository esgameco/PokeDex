import React, { useEffect, useState } from "react";
import { Alert, InputGroup, FormControl, Button } from "react-bootstrap";
import "../styles/Searchbar.css";

const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

const SearchBar = () => {
    const [input, setInput] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                console.log(json);
            })
        }
        fetchData();
    }, []);

    return (
        <>

        </>
    );
};

export default SearchBar;