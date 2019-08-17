import React, { Fragment } from 'react';
import NavHeader from "./nav/header";

const App = ({ children }) => (
  <Fragment>
    <NavHeader />
    <div className="grid-container fluid">
      <div className="padding-1">
        { children }
      </div>
    </div>
  </Fragment>
);

export default App;
