import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers"
import App from "./components/app";
import Welcome from "./components/content/welcome.js"
import Signup from "./components/auth/signup.js"

const root = document.getElementById('root');
const element = (
  <Provider store={ createStore(reducers, {}) }>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={ Welcome } />
        <Route path="/signup" exact component={ Signup } />
      </App>
    </BrowserRouter>
  </Provider>
);

render(element, root);
