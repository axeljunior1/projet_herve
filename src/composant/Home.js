import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    return (
        <Container className="py-5">
            {/* Section Hero */}
            <Row className="text-center">
                <Col>
                    <h1 className="fw-bold">Innover pour une Croissance Durable et Inclusive</h1>
                    <p className="lead text-muted">
                        Intégrer le développement durable, c'est faire de votre modèle économique un levier de performance,
                        conjuguant rentabilité, responsabilité et résilience.
                    </p>
                    <Button variant="success" size="lg" className="mt-3" onClick={()=> { navigate("solutions")}}>
                        Découvrir Nos Solutions
                    </Button>
                </Col>
            </Row>

            {/* Section Explicative */}
            <Row className="mt-5">
                <Col md={6}>
                    <Card className="shadow-lg border-0">
                        <Card.Body>
                            <h3 className="fw-bold">Notre Engagement</h3>
                            <p>
                                En tant que société à mission, nous vous accompagnons dans la conception et la mise en œuvre
                                de votre stratégie de communication en matière de développement durable.
                            </p>
                            <Button variant="outline-primary" onClick={()=> { navigate("mission")}} >En savoir plus</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="shadow-lg border-0">
                        <Card.Body>
                            <h3 className="fw-bold">Renforcez Votre Image de Marque</h3>
                            <p>
                                Adoptez des pratiques responsables et améliorez votre impact auprès des consommateurs et parties prenantes.
                            </p>
                            <Button variant="outline-primary" onClick={()=> { navigate("solutions")}} >Nos Solutions</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
