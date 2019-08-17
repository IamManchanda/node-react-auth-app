import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, done) => {
  return async function handleSignup(dispatch) {
    try {
      const response = await axios.post("http://localhost:3090/signup", formProps);
      const token = response.data.token;
      dispatch({
        type: AUTH_USER,
        payload: token,
      });
      localStorage.setItem("token", token);
      done();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email is in use",
      });
    }
  };
};

export const signin = (formProps, done) => {
  return async function handleSignin(dispatch) {
    try {
      const response = await axios.post("http://localhost:3090/signin", formProps);
      const token = response.data.token;
      dispatch({
        type: AUTH_USER,
        payload: token,
      });
      localStorage.setItem("token", token);
      done();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Invalid Login Credentials",
      });
    }
  };
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};
