import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";
import "./apropos.css";

const Apropos = () => {
    return (
        <div>
            <h1 className="my-5 text-center">Professionnels</h1>

            <Row className="justify-content-center">
                <Col xs={12}>
                    <Alert className="custom-alert">
                        <p>
                            Nous vous proposons un large panel de services : enlèvement, gestion, caractérisation, et
                            revalorisation des déchets (carton, papiers, verre, textiles, métaux, matériel informatique,
                            bio-médicale). Pack pour la communication, la responsabilité autour de la revalorisation de
                            vos biens et déchets. Nous vous proposons de former vos employés sur les pratiques éco
                            responsable et sur l’adoption d’outils d’éco-conception pour vos services et biens.
                            Pour les professionnels des btp, nous mettons à votre disposition un pack de communication
                            qui va accentuer les bonnes de durabilité sur vos sites. Tout ceci, dans le but de limiter le
                            bilan carbone de vos activités.
                        </p>
                    </Alert>
                </Col>
            </Row>
            <p>
                Le grand Est
            </p>
        </div>
    );
};

export default Apropos;



