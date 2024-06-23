import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Stuff";
import Navbar from "./components/Navbar";
import About from "./components/About";


function App() {
    return (
        <>
            <div><Navbar /></div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </>
    );

}

export default App;