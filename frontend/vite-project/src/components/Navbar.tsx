import { useState } from "react";
import "../App.css"
import "../styles/Navbar.css"
import SearchBar from "./Searchbar";
import { Col, InputGroup, FormControl, Button } from "react-bootstrap";

function Navbar() {


    return (
        <>
            <nav className="nav">
                <a href="/" className="site-name">PokeDex</a>
                <div className="searchBar">
                    <InputGroup className="w-45">
                        {/* <SearchBar /> */}
                    </InputGroup>
                </div>
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/stuff">Stuff</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;