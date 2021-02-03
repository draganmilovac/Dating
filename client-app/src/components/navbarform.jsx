import React, { Component, useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import axios from "axios";
import NavBarDropdown from "./navbardropdown";
import Login from "./login";
import Dropdown from "react-bootstrap/Dropdown";

const NavbarForm = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e) => {
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

  const handlelogOut = () => {
    if (isLogged === true) {
      localStorage.removeItem("token");
      setIsLogged(false);
    }
  };

  return (
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
            <NavBarDropdown onLogout = {handlelogOut} username={user.username}/>
          )}
          {!isLogged && (
            <Login onLogin ={handleLogin} />
          )}
    </Form>
  );
};

export default NavbarForm;
