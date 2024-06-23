import { useState } from "react";
import "../App.css"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <>
            <nav className="nav">
                <a href="/" className="site-name">PokeDex</a>
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