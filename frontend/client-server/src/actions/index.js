import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, done) => {
  return async function handleSignup(dispatch) {
    try {
      const response = await axios.post("http://localhost:3090/signup", formProps);
      dispatch({
        type: AUTH_USER,
        payload: response.data.token,
      });
      done();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email in use",
      });
    }
  };
};
