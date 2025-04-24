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
                                <Container className="mt-4">
                                    <Row className="g-3">
                                        <Col md={4} className="d-flex">
                                            <Card className="w-100">
                                                <Card.Body>
                                                    <Card.Title>Colonne 1</Card.Title>
                                                    <Card.Text>
                                                        Petit contenu.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4} className="d-flex">
                                            <Card className="w-100">
                                                <Card.Body>
                                                    <Card.Title>Colonne 2</Card.Title>
                                                    <Card.Text>
                                                        Contenu moyen avec un peu plus de texte pour voir l'effet.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col md={4} className="d-flex">
                                            <Card className="w-100">
                                                <Card.Body>
                                                    <Card.Title>Colonne 3</Card.Title>
                                                    <Card.Text>
                                                        Contenu très long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>


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
