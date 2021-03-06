import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers"
import App from "./components/app";
import Welcome from "./components/content/welcome.js"
import Feature from "./components/content/feature.js"
import Signup from "./components/auth/signup.js"
import Signin from "./components/auth/signin.js"
import Signout from "./components/auth/signout.js"

const initialReducerState = {
  auth: {
    authenticated: localStorage.getItem("token"),
  },
};

const store = createStore(reducers, initialReducerState, applyMiddleware(reduxThunk));
const element = (
  <Provider store={ store }>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={ Welcome } />
        <Route path="/feature" exact component={ Feature } />
        <Route path="/signup" exact component={ Signup } />
        <Route path="/signin" exact component={ Signin } />
        <Route path="/signout" exact component={ Signout } />
      </App>
    </BrowserRouter>
  </Provider>
  );
const root = document.getElementById('root');
render(element, root);
