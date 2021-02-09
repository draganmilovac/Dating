import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserDetail from "../components/user/userDetail";

const MemberDetails = () => {
  const userId = useParams().id;
  const [member, setMember] = useState([]);
  useEffect(async () => {
    const result = await axios.get(`http://localhost:5000/api/users/${userId}`);
    setMember(result.data);
  });
  return <UserDetail member={member} />;
};

export default MemberDetails;
