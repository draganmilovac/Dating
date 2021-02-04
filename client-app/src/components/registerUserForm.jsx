import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const RegisterUserForm = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/user/register", user)
      .then((response) => {
        const u = response;
        if (u) {
          localStorage.setItem("token", u.data.token);
        }
      }).catch((e) => {
        toast.error("Errors with username or password", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose:true
        });
      })
  };
  return (
    <div className="d-flex justify-content-center">
          <form>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={user.username}
                onChange={(u) => {
                  setUser({ ...user, username: u.target.value });
                }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={user.password}
                onChange={(u) => {
                  setUser({ ...user, password: u.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" onClick ={handleRegister}>
              Register
            </button>

          </form>
        </div>
  );
};

export default RegisterUserForm;
