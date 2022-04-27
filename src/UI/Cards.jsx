import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image from '../images/shrek.jpg'

const Cards = () => {
    return (
        <>
            <Container className="d-flex justify-content-around" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                <Row>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>
                                    RockStar
                                </Card.Title>
                                <Card.Text>Hey now</Card.Text>
                                <Button variant="success">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>
                                    RockStar
                                </Card.Title>
                                <Card.Text>Hey now</Card.Text>
                                <Button variant="success">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>
                                    RockStar
                                </Card.Title>
                                <Card.Text>Hey now</Card.Text>
                                <Button variant="success">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cards;