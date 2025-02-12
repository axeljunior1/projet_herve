import './App.css';

import React from 'react';
import Mission from "./composant/Mission";
import {Link, Route, Routes} from "react-router-dom";
import Apropos from "./composant/Apropos";
import NotFound from "./composant/NotFound";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Home from "./composant/Home";



const App = () => {
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>

                    <Navbar.Brand as={Link} to="/">Moov4Goods</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link as={Link} to="/mission">Notre Mission</Nav.Link>*/}
                            <NavDropdown title="A propos" id="basic-nav-dropdown">
                                <NavDropdown.Item as ={Link} to="/apropos">Qui sommes nous ?</NavDropdown.Item>
                                <NavDropdown.Item as ={Link} to="/mission"> Notre engagement </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
<div className="container">
    <Routes className="">
        <Route path="/" element={<Home/>}/>
        <Route path="/mission" element={<Mission/>}/>
        <Route path="/apropos" element={<Apropos/>}/>
        <Route path="/mission" element={<Apropos/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
</div>




        </>

    );
};


export default App;
