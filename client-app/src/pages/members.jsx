import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/user/userList";

const Members = () => {
  const [members, setMembers] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:5000/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMembers(result.data);
    }
    fetchData();
  });
  return <UserList users={members} />;
};

export default Members;
