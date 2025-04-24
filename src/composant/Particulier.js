import React from 'react';
import {Alert, Col, Image, Row} from "react-bootstrap";
import "./apropos.css";

const Apropos = () => {

    return (
        <div>
            <h1 className="my-5 text-center">Particulier</h1>

            <Row className="justify-content-center">
                <Col xs={12}>
                    <Alert className="custom-alert">
                        <p>
                            Parce que nous sommes tous responsable des déchets que nous produisons, nous
                            accompagnons les particuliers pour la gestion et la valorisation des déchets. Nous
                            accompagnons pour le tri, l’enlèvement, la revalorisation de vos biens et déchets non
                            dangereux. Pour vos biens en état correct nous les réinsérons dans le circuit de consommation
                            par des dons, et aussi par l’équipement de médiathèque et centre d’apprentissage pour la
                            promotion de l’éducation et du numérique au Cameroun contribuant ainsi au quatrième
                            objectif du développement durable.
                        </p>
                    </Alert>
                </Col>
            </Row>
        </div>
    );
};

export default Apropos;



