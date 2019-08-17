import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";

const Signout = class extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <h3>Sorry to see you go.</h3>;
  }
};

export default connect(null, actions)(Signout);
