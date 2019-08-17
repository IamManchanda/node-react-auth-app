import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
  const ComposedComponent = class extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      const { auth, history } = this.props;
      if (!auth) history.push('/');
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    auth: state.auth.authenticated,
  });
  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
