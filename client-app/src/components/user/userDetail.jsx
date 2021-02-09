import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./userDetail.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ImageGallery from "react-image-gallery";

const UserDetail = (props) => {
  const userId = useParams().id;
  const [member, setMember] = useState([]);
  const images = [{ original: member.photoUrl, thumbnail: member.photoUrl }];
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:5000/api/users/${userId}`
      );
      setMember(result.data);
    }
    fetchData();
  });
  return (
    <div className="container mt-4">
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
                <strong>Lication:</strong>
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
              <div className="btn-group d-flex">
                <button className="btn btn-primary w-100">Like</button>
                <button className="btn btn-success w-100">Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="tab-panel">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="about" title="About">
                <h4>Description</h4>
                <p>{member.introduction}</p>
                <h4>Looking for</h4>
                <p>{member.lookingFor}</p>
              </Tab>
              <Tab eventKey="interests" title="Interests">
                <h4>Interests</h4>
                <p>{member.interests}</p>
              </Tab>
              <Tab eventKey="photos" title="Photos">
                <ImageGallery items={images} />
              </Tab>
              <Tab eventKey="messages" title="Messages">
                <p>Message will go here</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
