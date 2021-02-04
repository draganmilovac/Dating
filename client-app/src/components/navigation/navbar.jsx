import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLinks from './navLinks';

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Dating App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavLinks />
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
