import React, { Component } from 'react';
import { Link } from "react-router-dom";

const NavHeader = class extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Auth App</li>
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
    );
  }
};

export default NavHeader;
