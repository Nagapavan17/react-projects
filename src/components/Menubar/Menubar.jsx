import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menubar.css'
import Home from '../Home/Home';


const Menubar = () => {
  return (
        <>
             <Navbar expand="lg" className="bg-body-tertiary Menu">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/About'>About</Nav.Link>
                            <Nav.Link href='Services'>Services</Nav.Link>
                            <Nav.Link href='/blogs'>Blogs</Nav.Link>
                            <Nav.Link href='gallery'>Gallery</Nav.Link>
                            <Nav.Link href='/contact'>Contact</Nav.Link>
                        </Nav>
                            <Button variant="outline-success">Search</Button>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </> 
  )
}

export default Menubar
