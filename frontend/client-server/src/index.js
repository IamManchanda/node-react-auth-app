import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { render } from "react-dom";

import App from "./components/app";
import Welcome from "./components/content/Welcome.js"

const root = document.getElementById('root');
const element = <BrowserRouter>
  <App>
    <Route path="/" exact component={ Welcome } />
  </App>
</BrowserRouter>;

render(element, root);
