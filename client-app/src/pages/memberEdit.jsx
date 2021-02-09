import React, { useState, useEffect } from "react";
import axios from "axios";
import EditUser from "../components/user/editUser";
import jwt_decode from "jwt-decode";

const MemberEdit = () => {
  const token = localStorage.getItem("token");
  var user = jwt_decode(token);
  const [member, setMember] = useState({
    photoUrl: "",
    knownAs: "",
    country: "",
    city: "",
    age: "",
    lastActive: "",
    created: "",
    introduction: "",
    lookingFor: "",
    interests: "",
  });
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:5000/api/users/${user.nameid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMember(result.data);
    }
    fetchData();
  });
  return <EditUser member={member} id={user.nameid} token={token} />;
};

export default MemberEdit;
