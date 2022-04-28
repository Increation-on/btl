import {Container, Row, Col } from "react-bootstrap"
import image from "../images/shrek.jpg"

const Description = () => {
    return (
        <>
            <Container className="mt-4" style={{marginBottom:"30px"}}>
                <Row>
                    <Col md={7}>
                        <img alt="ahrek" src={image} height={400}></img>
                    </Col>
                    <Col md={5}>
                        <h2>Hell  o</h2>
                        <p>asgdjasbjdjgkasjdbjasdjkasdahsdkasdljkaslkfjasfkjasfhkasfhkasfhjasfj</p>
                        <p>asgdjasbjdjgkasjdbjasdjkasdahsdkasdljkaslkfjasfkjasfhkasfhkasfhjasfj</p>
                        <p>asgdjasbjdjgkasjdbjasdjkasdahsdkasdljkaslkfjasfkjasfhkasfhkasfhjasfj</p>
                        <p>asgdjasbjdjgkasjdbjasdjkasdahsdkasdljkaslkfjasfkjasfhkasfhkasfhjasfj</p>
                        <p>asgdjasbjdjgkasjdbjasdjkasdahsdkasdljkaslkfjasfkjasfhkasfhkasfhjasfj</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Description;