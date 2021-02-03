import React, { Component, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const NavBar = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLogged, setIsLogged] = useState(false);

  const logIn = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", user)
      .then((response) => {
        const u = response;
        if (u) {
          localStorage.setItem("token", u.data.token);
          console.log(u.data.token);
          setIsLogged(true);
        }
      });
  };

  const logOut = () => {
    if (isLogged === true) {
      localStorage.removeItem("token");
      setIsLogged(false);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Dating App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Matches</Nav.Link>
          <Nav.Link href="#link">Lists</Nav.Link>
          <Nav.Link href="#link">Messages</Nav.Link>
        </Nav>
        <Form inline>
          {!isLogged && (
            <FormControl
              type="text"
              placeholder="Username"
              className="mr-sm-2"
              value={user.username}
              onChange={(u) => {
                setUser({ ...user, username: u.target.value });
              }}
            />
          )}
          {!isLogged && (
            <FormControl
              type="text"
              placeholder="Password"
              className="mr-sm-2"
              value={user.password}
              onChange={(u) => {
                setUser({ ...user, password: u.target.value });
              }}
            />
          )}
          {isLogged && (
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {user.username}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
          {!isLogged && (
            <Button type="submit" variant="outline-success" onClick={logIn}>
              Login
            </Button>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
