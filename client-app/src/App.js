import React, { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import RegisterUserForm from "./components/registerUserForm";
import Members from "./pages/members";
import Lists from "./pages/lists";
import Messages from "./pages/messages";
import NavBar from "./components/navigation/navbar";
import { AuthContexht } from "./shared/context/auth-context";
import UserList from "./components/user/userList";
import UserDetail from "./components/user/userDetail";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  if (isLoggedIn) {
    console.log(isLoggedIn);
    routes = (
      <Switch>
        <Route path="/members/:id" exact>
          <UserDetail />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <RegisterUserForm />
        </Route>
        <Route path="/members/:id" exact>
          <UserDetail />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContexht.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <NavBar />
        <main>{routes}</main>
      </Router>
    </AuthContexht.Provider>
  );
}

export default App;
