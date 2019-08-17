import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavHeader = class extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Auth App</li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            { auth ? (
              <Fragment>
                <li>
                  <Link to="/feature">Feature</Link>
                </li>
                <li>
                  <Link to="/signout">Sign Out</Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                <Link to="/signin">Sign In</Link>
                </li>
              </Fragment>
            ) }
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(NavHeader);
