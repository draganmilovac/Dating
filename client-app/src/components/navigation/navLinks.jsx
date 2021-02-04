import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarForm from "./../navbarform";
import { AuthContexht } from "./../../shared/context/auth-context";
import { Link } from 'react-router-dom'

const NavLinks = () => {
  const auth = useContext(AuthContexht);
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {auth.isLoggedIn && <Nav.Link as={Link} to="members">Matches</Nav.Link>}
        {auth.isLoggedIn && <Nav.Link as={Link} to="lists">Lists</Nav.Link>}
        {auth.isLoggedIn && <Nav.Link as={Link} to="messages">Messages</Nav.Link>}
      </Nav>
      <NavbarForm />
    </Navbar.Collapse>
  );
};

export default NavLinks;
