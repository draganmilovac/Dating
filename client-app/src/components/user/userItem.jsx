import React from "react";
import "./userItem.css";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <React.Fragment>
      <div className="card mb-4 mr-3">
        <div className="card-img-wrapper">
          <img
            className="card-img-top"
            src={props.photoUrl}
            alt={props.knownAs}
          />
          <ul className="list-inline member-icons animate text-center">
            <li className="list-inline-item" key={props.id}>
              <Link to={`/members/${props.id}`}>
                <button className="btn btn-primary">
                  <i className="fa fa-user"></i>
                </button>
              </Link>
            </li>
            <li className="list-inline-item" key={props.photoUrld}>
              <button className="btn btn-primary">
                <i className="fa fa-heart"></i>
              </button>
            </li>
            <li className="list-inline-item" key={props.age}>
              <button className="btn btn-primary">
                <i className="fa fa-envelope"></i>
              </button>
            </li>
          </ul>
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
    </React.Fragment>
  );
};

export default UserItem;
