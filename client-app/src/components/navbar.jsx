import React, { Component, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarForm from "./navbarform";
import Register from "./register";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Dating App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Matches</Nav.Link>
            <Nav.Link href="#link">Lists</Nav.Link>
            <Nav.Link href="#link">Messages</Nav.Link>
          </Nav>
          <NavbarForm />
        </Navbar.Collapse>
      </Navbar>
      <Register />
    </React.Fragment>
  );
};

export default NavBar;
