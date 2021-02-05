import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./userItem.css";

const UserItem = (props) => {
  return (
    <div className="card mb-4 mr-3">
      <div className="card-img-wrapper">
        <img
          className="card-img-top"
          src={props.photoUrl}
          alt={props.knownAs}
        />
      </div>
      <div className="card-body p-1">
        <h6 className="card-title text-center mb-1">
          <i className="fa fa-user"></i>
          {props.knownAs}, {props.age}
        </h6>
        <p className="card-text">{props.city}</p>
        <p className="card-text">
          <small className="text-muted">{props.city}</small>
        </p>
      </div>
    </div>
  );
};

export default UserItem;
