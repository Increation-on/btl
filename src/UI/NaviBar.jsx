import { Nav, Navbar, Button, Container, Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react"

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #adb1b8;
        &:hover {
            color: white;
        }
        text-decoration: none;
    }
`

const NaviBar = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }


    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto" >
                                <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            </Nav>
                            <Nav >
                                <Button variant="success" className="me-2" onClick={handleShow}>Log in</Button>
                                <Button variant="success" onClick={handleShow}>Sign out</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control placeholder="enter email" type="email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="fromBasicEmail" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="enter password" type="password" />
                        </Form.Group>
                        <Form.Group controlId="fromBasicCheckbox" >
                            <Form.Check className="mt-3" label="remember me" type="checkbox" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NaviBar;