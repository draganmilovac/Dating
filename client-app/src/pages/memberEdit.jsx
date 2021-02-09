import React, { useContext, useState, useEffect } from "react";
import { AuthContexht } from "./../shared/context/auth-context";
import axios from "axios";
import EditUser from "../components/user/editUser";
import jwt_decode from "jwt-decode";

const MemberEdit = () => {
  const token = localStorage.getItem("token");
  var user = jwt_decode(token);
  // const userId = user.nameid;
  // console.log(user.nameid);
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
  useEffect(async () => {
    const result = await axios.get(
      `http://localhost:5000/api/users/${user.nameid}`
    );
    setMember(result.data);
  });
  return <EditUser member={member} id={user.nameid} token={token} />;
};

export default MemberEdit;
