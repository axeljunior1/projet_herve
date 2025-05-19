import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";
import "./apropos.css";

const Apropos = () => {
    return (
        <div>
            <h1 className="my-5 text-center">Professionnels</h1>


            <p className="fs-5">
                Nous vous proposons un large panel de services : enlèvement, gestion, caractérisation,
                et revalorisation des déchets (carton, papiers, verre, textiles, métaux, matériel
                informatique, bio-médicale). Pack pour la communication, la responsabilité autour de
                la revalorisation de vos biens et déchets. Nous vous proposons de former vos employés
                sur les pratiques éco-responsable et sur l’adoption d’outils d’éco-conception pour vos
                services et biens.
            </p>
            <p className="fs-5">
                Pour les professionnels des btp, nous mettons à votre disposition un pack de
                communication qui va accentuer les bonnes pratique de durabilité sur vos sites. Tout
                ceci, dans le but de limiter le bilan carbone de vos activités.
                Pour les collectivités il s’agira de concevoir un plan de sensibilisation au enjeux
                écologique et implémenter des composteurs.
            </p>
        </div>
    );
};

export default Apropos;



