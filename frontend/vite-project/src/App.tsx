import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PokemonPage from "./components/Pokemon/PokemonPage";



function App() {
    return (
        <>
            <div><Navbar /></div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/Pokemon/:pokemonName" element={<PokemonPage />} />
                    </Routes>
                </div>
            </Router>
        </>
    );

}

export default App;