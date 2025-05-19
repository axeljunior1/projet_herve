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
                <strong>Le grand Est accompagne les projets industriels verts :</strong><br/>
                La région du grand Est dans le cadre du projet national intitulé « Territoires d’industrie »
                encourage les projets industriels portant sur la transition écologique. Neuf projets ont
                déjà bénéficié d’un appuis chiffré à 5,1 millions d’euros. Cette action favorisera la
                réindustrialisation du territoire. <a target="_blank" href="https://france3-regions.franceinfo.fr/grand-est/champagne-ardenne/encourager-les-projets-industriels-verts-5-1-millions-d-euros-verses-par-le-grand-est-en-2025-3085675.html">france3-regions.francetvinfo.fr</a>
            </p>
            <br/>
            <p>
                <strong>Consultation publique pour la gestion de l’eau :</strong> <br/>
                La consultation publique qui a débuté le 25 novembre 2024, pour une durée de six
                mois concernant la gestion de l’eau et les risques d’inondations pour la période
                2028-2033. Cette consultation va permettre aux citoyens de s’exprimer sur les
                enjeux liés à la préservation des ressources en eau et à la prévention des
                inondations dans la région.<a target='_blank' href="https://www.grand-est.developpement-durable.gouv.fr/consultation-publique-sur-les-enjeux-de-l-eau-et-a23007.html?lang=fr">france3-regions.francetvinfo.fr</a>

            </p>
        </div>
    );
};

export default Apropos;



