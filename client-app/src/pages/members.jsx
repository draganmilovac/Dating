import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "../components/user/userList";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/api/users");
    setMembers(result.data);
  });
  return <UserList users={members} />;
};

export default Members;
