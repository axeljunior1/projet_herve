import React from 'react';
import {Alert, Col, Image, Row} from "react-bootstrap";
import "./apropos.css";

const Apropos = () => {
    return (
        <div>
            <h1 className="my-5 text-center">ACTUALITÉS</h1>

            <Row className="justify-content-center">
                <Col xs={12}>
                    <Alert className="custom-alert">
                        <p>
                            Les 4,5,6 et 7 octobre 2025 prochain se tiendra à Lyon le salon Pollutec qui regroupe les
                            principaux acteurs industriel et leur partenaires (les entreprises, collectivités, les territoires)
                            qui agissent pour la préservation de l’environnement.
                        </p>
                    </Alert>
                </Col>
                <Col xs={12}>
                    <Image src="./polutec.jpg" fluid />
                </Col>
            </Row>
            <p>
                Le grand Est
            </p>
        </div>
    );
};

export default Apropos;



