import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

const NavBar = (props) => {
  return (
<Navbar  bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Dating App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Matches</Nav.Link>
      <Nav.Link href="#link">Lists</Nav.Link>
      <Nav.Link href="#link">Messages</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Username" className="mr-sm-2" />
      <FormControl type="text" placeholder="Password" className="mr-sm-2" />
      <Button variant="outline-success">Login</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  );
};

export default NavBar;
