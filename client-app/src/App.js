import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import RegisterUserForm from "./components/registerUserForm";

function App() {
  return (
    <Router>
      <Switch> 
        <Route path="/" exact>
          <NavBar />
        </Route>
        <Route path="/register" exact>
          <RegisterUserForm />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
