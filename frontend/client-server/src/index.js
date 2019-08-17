import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers"
import App from "./components/app";
import Welcome from "./components/content/welcome.js"
import Signup from "./components/auth/signup.js"

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const element = (
  <Provider store={ store }>
  <BrowserRouter>
  <App>
  <Route path="/" exact component={ Welcome } />
  <Route path="/signup" exact component={ Signup } />
  </App>
  </BrowserRouter>
  </Provider>
  );
const root = document.getElementById('root');

render(element, root);
