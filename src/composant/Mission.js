import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import "./mission.css"

const Mission = () => {
    return (
        <div className="mt-5">
            <Row>
                <Col xs={12} lg={6}>
                    <img src="/economie_circulaire.jpg"  width={600} height={600}  alt="Economie Circulaire" />
                </Col>
                <Col xs={12} lg={6} className="mission-container">
                    <h1 className="mission-title">Notre Mission</h1>
                    <p className="mission-text">
                        <strong>INNOVER POUR UNE CROISSANCE DURABLE ET INCLUSIVE.</strong><br/>
                        Intégrer le développement durable, c'est faire de votre modèle économique un levier
                        de performance durable, conjuguant rentabilité, responsabilité et résilience.
                        En tant que société à mission, nous vous accompagnons dans la conception et la mise en
                        œuvre de votre stratégie de communication en matière de développement durable,
                        afin de renforcer votre image de marque auprès de vos consommateurs et parties prenantes.
                    </p>
                    <Row className="justify-content-center">
                        <Image src="/Logo_MG.png" rounded className="mission-image " />
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Mission;
