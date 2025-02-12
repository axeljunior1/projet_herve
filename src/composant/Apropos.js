import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";
import "./apropos.css";

const Apropos = () => {
    return (
        <div>
            <h1 className="my-5"> A propos </h1>

            <Row className="justify-content-center">
                <Col xs={12}>
                    <Alert className="custom-alert">
                        <p>
                            <strong>Moov4Goods</strong> est créé en 2025 par <em>......</em> et <em>....</em>,
                            ingénieurs diplômés de Polytech Nancy en
                            industrie et environnement. Nous mettons notre expertise en gestion, optimisation et
                            valorisation des déchets
                            au service des particuliers, entreprises et collectivités.
                            <br/> <br/>
                            Nous sommes à votre écoute pour concevoir une <strong>solution innovante
                            sur-mesure</strong> adaptée à votre besoin.
                            Nous travaillons en collaboration avec un panel de personnel formé, qualifié et ayant une
                            expérience et une expertise de la gestion et du traitement de déchets
                        </p>
                    </Alert>
                </Col>
            </Row>
        </div>
    );
};

export default Apropos;



