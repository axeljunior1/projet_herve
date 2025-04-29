import {Alert, Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";

export const Aceuil3 = () => {
    return (

        <div>
            <p>Ac 3</p>

            <Row>
                <Col lg={9}>
                    <Card className="bg-dark text-white position-relative">
                        <Card.Img src="/nature.jpg" height={600} alt="Card image"/>
                        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                            <Container className="mt-auto">
                                <Row className="g-3">
                                    <Col md={4} className="d-flex">
                                        <Card className="w-100">
                                            <Card.Body>
                                                <Card.Title className="">SOLUTION
                                                    SURMESURE</Card.Title>
                                                <Card.Text>
                                                    Parce que vous êtes
                                                    unique nous vous
                                                    proposons une solution
                                                    adaptée à votre besoin.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} className="d-flex">
                                        <Card className="w-100">
                                            <Card.Body>
                                                <Card.Title className="">NOTRE DÉMARCHES</Card.Title>
                                                <Card.Text>
                                                    Repose sur une
                                                    approche scientifique
                                                    qui prend en compte
                                                    votre produit sur son
                                                    cycle de vie.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} className="d-flex">
                                        <Card className="w-100">
                                            <Card.Body>
                                                <Card.Title className="">VISIBILITÉ</Card.Title>
                                                <Card.Text>
                                                    Nous communiquons
                                                    dans nos médias sur les
                                                    actions durable que
                                                    vous mettez en place
                                                    dans votre entreprise.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Alert className={"custom-alert"}>
                        <p>
                            Votre partenaire
                            pour la gestion, la
                            valorisation et le
                            recyclage de vos
                            biens et déchets.
                        </p>
                    </Alert>

                    <Button variant={"outline-primary"} className="w-100">
                        <p>
                            Notre savoirs faire
                        </p>
                    </Button>

                </Col>
            </Row>
            <Row className=" pt-5 ms-auto justify-content-center">
                <Col lg={4}>
                    <Image src="./assets/image/pollutec_blogpost.jpeg" width={300} alt="Card image"
                           className="overflow-hidden"/>
                </Col>
                <Col lg={4}>
                    <Image src="./assets/image/pollutec_blogpost.jpeg" width={300} alt="Card image"
                           className="overflow-hidden"/>
                </Col>
                <Col lg={4}>
                    <Image src="./assets/image/pollutec_blogpost.jpeg" width={300} alt="Card image"
                           className="overflow-hidden"/>
                </Col>
            </Row>

            <div>
                <p className="mt-3 px-5">
                    Une équipe de professionnel qualifié disponible pour vous livrer leur expertise et vous
                    faciliter la prise en main de votre conscience écologique. En étant acteur du
                    développement durable, vous engagez des actions permettant de limiter votre
                    empreinte carbone et de réduire la consommation des ressources de la planète.
                    Vous pouvez contribuez à notre engagement en faveur de l’éducation pour tous à
                    travers notre programme educ4us qui construit des centres multimédia dans des pays
                    pauvre contribuant ainsi au quatrième pilier du développement durable qui est l’accès
                    à l’éducation pour tous.
                </p>
            </div>

        </div>
    );
};