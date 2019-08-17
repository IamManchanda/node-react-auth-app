import React, { Component } from 'react';
import requireAuth from "../require-auth";

const Feature = class extends Component {
  render() {
    return <h3>This is the feature.</h3>;
  }
};

export default requireAuth(Feature);
