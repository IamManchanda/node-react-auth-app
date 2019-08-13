import React, { Fragment } from 'react';
import NavHeader from "./nav/header";

const App = ({ children }) => <Fragment>
  <NavHeader />
  { children }
</Fragment>;

export default App;
