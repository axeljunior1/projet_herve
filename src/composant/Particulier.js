import React from 'react';
import {Alert, Col, Image, Row} from "react-bootstrap";
import "./apropos.css";

const Apropos = () => {

    return (
        <div>
            <h1 className="my-5 text-center">Particuliers</h1>
            <div className="fs-5">

                <p>
                    Parce que nous sommes tous responsable des déchets que nous produisons, nous
                    accompagnons les particuliers pour la gestion et la valorisation des déchets. Nous
                    accompagnons pour le tri, l’enlèvement, la revalorisation de vos biens et déchets non
                    dangereux. Pour vos biens en état correct nous les réinsérons dans le circuit de
                    consommation par des dons, et aussi par l’équipement de médiathèque et centre
                    d’apprentissage pour la promotion de l’éducation et du numérique au Cameroun
                    contribuant ainsi au quatrième objectif du développement durable.
                </p>
                <ul>
                    <li>Évacuation d’ordure ménagères ou de déchets non dangereux</li>
                    <li>Évacuation d’encombrant</li>
                    <li>Évacuation de déchets électrique ou électronique</li>
                </ul>
                <p>Le saviez-vous ?</p>
                <p>La réglementation en matière de déchets proscrit de mêler des déchets dangereux
                (seringues, piles, solvant) et prescrit d’effectuer le tri de ceux-ci de manière spécifique.
                Les déchets dangereux sont régis par l’article R541-8 du code de l’environnement. Un
                    déchet est dit dangereux s’il présente une ou des propriétés de danger.</p>
            </div>
        </div>
    );
};

export default Apropos;



