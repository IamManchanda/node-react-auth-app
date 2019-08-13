import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";

const NavHeader = class extends Component {
  render() {
    return <Fragment>
      <Link to="/">Redux Auth</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signout">Sign Out</Link>
      <Link to="/feature">Feature</Link>
    </Fragment>;
  }
};

export default NavHeader;
