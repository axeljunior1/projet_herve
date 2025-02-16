import React from "react";
import {Container, Row, Col, Button, Card, Alert} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="">


            <Row>
                <Col lg={9}>
                    <Card className="bg-dark text-white">
                        <Card.Img src="/nature.jpg" height={300} alt="Card image"/>
                        <Card.ImgOverlay>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <Row className="align-items-end">
                                    <Col lg={4}>
                                        <Alert className={"custom-alert"}>
                                            <p className={"fw-bold"}>RÉACTIVITÉ</p>
                                            <p>
                                                Nous nous engageons à
                                                enlever vos biens avec les
                                                meilleurs délais.</p>
                                        </Alert>
                                    </Col>
                                    <Col lg={4}>
                                        <Alert className={"custom-alert"}>
                                            <p className={"fw-bold"}>ÉCOUTE ET ADAPTABILITÉ </p>
                                            <p>
                                                Notre offre s’appuie sur la description des
                                                lieux, des photos et des données de
                                                surface et de volume que vous nous
                                                fournirez.
                                            </p>
                                        </Alert>
                                    </Col>

                                    <Col lg={4}>
                                        <Alert className={"custom-alert"}>
                                            <p className={"fw-bold"}>FIABILITÉ ET SATISFACTION</p>
                                            <p>

                                                Nous respectons nos engagements et
                                                nos valeurs dans l’exercice de notre
                                                mission pour renforcer votre
                                                confiance.</p>
                                        </Alert>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col lg={3}>

                    <Alert className={"custom-alert"}>
                        <p>

                            Nous caractérisons,
                            trions vos biens et
                            déchets et prenons
                            soin de la
                            revalorisation (don,
                            science4us,
                            recyclage).</p>
                    </Alert>
                </Col>
            </Row>

        </div>
    );
};

export default Home;
