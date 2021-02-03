import React, { Component } from "react";
import Button from "react-bootstrap/Button";

const Login = (props) => {
  return (
    <Button type="submit" variant="outline-success" onClick={props.onLogin}>
      Login
    </Button>
  );
};

export default Login;
