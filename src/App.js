import './App.css';

import React from 'react';
import Mission from "./composant/Mission";
import {Link, Route, Routes} from "react-router-dom";
import Apropos from "./composant/Apropos";
import NotFound from "./composant/NotFound";
import {Container, Image, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import Home from "./composant/Home";
import Actualite from "./composant/Actualite";


const App = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary justify-content-between border shadow-sm px-4 mb-5 text-black"
                    style={{ borderRadius: "10px", backdropFilter: "blur(8px)" }}>
                {/* LOGO À GAUCHE */}
                <Navbar.Brand as={Link} to="/" className="me-auto">
                    <Image src="/GraphiqueCol.png" height="80" rounded className="mission-image" />
                </Navbar.Brand>

                {/* BOUTON TOGGLE POUR MOBILE */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* MENUS CENTRÉS AVEC ESPACEMENT ÉGAL */}
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-black">
                    <Nav className="mx-5 gap-4" >  {/* `gap-4` pour plus d'espace entre les éléments */}
                        <NavDropdown title="NOS SERVICES" id="basic-nav-dropdown" className="text-black">
                            <NavDropdown.Item as={Link} to="/particuliers"> Particuliers</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/professionnels"> Professionnels</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="A PROPOS" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/apropos" className="text-black">Qui sommes-nous ?</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mission" className="text-black">Notre engagement</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/actualite" className="text-black">ACTUALITÉS</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-black">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container">
                <Routes className="">
                    <Route path="/" element={<Home/>}/>
                    <Route path="/mission" element={<Mission/>}/>
                    <Route path="/apropos" element={<Apropos/>}/>
                    <Route path="/mission" element={<Apropos/>}/>
                    <Route path="/actualite" element={<Actualite/>}/>
                    <Route path="/particuliers" element={<Actualite/>}/>
                    <Route path="/professionnels" element={<Actualite/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>


        </>

    );
};


export default App;
