import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Nav } from 'react-bootstrap';




function Navigation(){
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand className="display-1 p-2" href="#">OurTube</Navbar.Brand>
        <NavbarToggle  aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Trending</Nav.Link>
            <Nav.Link href="#action2">Gaming</Nav.Link>
            <Nav.Link href="#action2">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
export default Navigation;