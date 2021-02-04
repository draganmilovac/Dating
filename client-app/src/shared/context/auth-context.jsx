import { createContext } from "react";

export const AuthContexht = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
