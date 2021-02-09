import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserDetail from "../components/user/userDetail";
import jwt_decode from "jwt-decode";

const MemberDetails = () => {
  const userId = useParams().id;
  const token = localStorage.getItem("token");
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `http://localhost:5000/api/users/${userId}`,
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

  return <UserDetail member={member} />;
};

export default MemberDetails;
