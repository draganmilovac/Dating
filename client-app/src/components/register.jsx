import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mt-5">
      <div style={{ textAlign: "center" }}>
        <h1>Find your match</h1>
        <p className="lead">
          Come on in to view your matches... All you need to do is sign up!
        </p>
        <div className="text-center">
          <Link to="/register">
            <button type="button" className="btn btn-primary btn-lg">Register</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
