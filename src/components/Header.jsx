import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Welcome</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/aboutMe">About Me</Nav.Link>
                    <Nav.Link href="/skills">Skills</Nav.Link>
                    <Nav.Link href="/experience">Experience</Nav.Link>
                    <Nav.Link href="/contactMe">Contact Me</Nav.Link>
                    <Nav.Link href="/recommendations">Recommendations</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;