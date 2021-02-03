import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";

const RegisterUserForm = (props) => {
const [user, setUser] = useState({ username: "", password: "" });
  return (
    <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
};

export default RegisterUserForm;
