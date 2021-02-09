import React, { useState, useContext } from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import axios from "axios";
import NavBarDropdown from "./navbardropdown";
import { toast } from "react-toastify";
import { AuthContexht } from "../../shared/context/auth-context";
import Button from "react-bootstrap/Button";

toast.configure();
const NavbarForm = (props) => {
  const auth = useContext(AuthContexht);
  const [user, setUser] = useState({ username: "", password: "" });
  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/auth/login", user)
      .then((response) => {
        const u = response;
        if (u) {
          localStorage.setItem("token", u.data.token);
          toast.success("Successfuly logged", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: true,
          });
          auth.login();
        }
      })
      .catch((e) => {
        console.log("Logged with error");
        toast.error("Invalid username or password", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: true,
        });
      });
  };

  const handlelogOut = () => {
    if (auth.isLoggedIn) {
      auth.logout();
      localStorage.removeItem("token");
      toast.info("Successfuly logged out", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: true,
      });
    }
  };

  return (
    <Form inline>
      {!auth.isLoggedIn && (
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
      {!auth.isLoggedIn && (
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
      {auth.isLoggedIn && (
        <NavBarDropdown onLogout={handlelogOut} username={user.username} />
      )}
      {!auth.isLoggedIn && (
        <Button type="submit" variant="outline-success" onClick={handleLogin}>
          Login
        </Button>
      )}
    </Form>
  );
};

export default NavbarForm;
