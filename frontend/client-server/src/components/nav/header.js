import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";

const NavHeader = class extends Component {
  render() {
    return <Fragment>
      <div class="top-bar">
        <div class="top-bar-left">
          <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">Auth App</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/signup">Sign Up</Link>
            </li>
            <li>
            <Link to="/signin">Sign In</Link>
            </li>
            <li>
            <Link to="/signout">Sign Out</Link>
            </li>
            <li>
              <Link to="/feature">Feature</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>;
  }
};

export default NavHeader;
