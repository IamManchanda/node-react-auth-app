import INITIAL_AUTH_STATE from "./fixtures/initial-auth-state";
import { AUTH_USER, AUTH_ERROR } from "../actions/types";

const auth = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default auth;