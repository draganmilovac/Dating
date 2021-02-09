import React, { Component, useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

const EditUser = (props) => {
  const { member } = props;

  const [introduction, setIntroduction] = useState({
    ...props.member.introduction,
  });
  const [lookingFor, setLookingFor] = useState({
    ...props.member.lookingFor,
  });
  const [interests, setInterests] = useState({
    ...props.member.interests,
  });
  const [city, setCity] = useState({
    ...props.member.city,
  });
  const [country, setCountry] = useState({
    ...props.member.country,
  });

  const handleIntroduction = (event) => {
    setIntroduction(event.target.value);
  };
  const handleLookingFor = (event) => {
    setLookingFor(event.target.value);
  };
  const handleInterests = (event) => {
    setInterests(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const user = {
      country: country,
      city: city,
      introduction: introduction,
      lookingFor: lookingFor,
      interests: interests,
    };

    await axios
      .put(`http://localhost:5000/api/users/${props.id}`, user, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {});
    console.log(user);
  };
  useEffect(() => {
    setIntroduction(props.member.introduction);
    setLookingFor(props.member.lookingFor);
    setInterests(props.member.interests);
    setCountry(props.member.country);
    setCity(props.member.city);
  }, [
    props.member.introduction,
    props.member.lookingFor,
    props.member.interests,
  ]);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-4">
          <h1>Your profile</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <img
              className="card-img-top img-thumbnail"
              src={member.photoUrl}
              alt={member.knownAs}
            />
            <div className="card-body">
              <div>
                <strong>Location:</strong>
                <p>
                  {member.city}, {member.country}
                </p>
              </div>
              <div>
                <strong>Age:</strong>
                <p>{member.age}</p>
              </div>
              <div>
                <strong>Last Active:</strong>
                <p>{member.lastActive}</p>
              </div>
              <div>
                <strong>Member since:</strong>
                <p>{member.created}</p>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-success btn-block"
                onClick={handleSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="tab-panel">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="about" title="Edit profile">
                <form>
                  {" "}
                  <h4>Description</h4>
                  <textarea
                    name="introduction"
                    rows="6"
                    className="form-control"
                    value={introduction}
                    onChange={handleIntroduction}
                  ></textarea>
                  <textarea
                    name="lookingFor"
                    rows="6"
                    className="form-control"
                    value={lookingFor}
                    onChange={handleLookingFor}
                  ></textarea>
                  <textarea
                    name="interests"
                    rows="6"
                    className="form-control"
                    value={interests}
                    onChange={handleInterests}
                  ></textarea>
                  <h4>Location details:</h4>
                  <div className="form-inline">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={city}
                      onChange={handleCity}
                    />
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      value={country}
                      onChange={handleCountry}
                    />
                  </div>
                </form>
              </Tab>
              <Tab eventKey="interests" title="Edit photos">
                <p>Photo edit will go here</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
