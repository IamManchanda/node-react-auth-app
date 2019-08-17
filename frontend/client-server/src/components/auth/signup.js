import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Signup = class extends Component {
  handleFormSubmission = (formProps) => {
    const { signup, history } = this.props;
    signup(formProps, function handleFormSignup() {
      history.push("/feature");
    });
  };

  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <div className="card">
        <div className="card-divider">
          Signup!
        </div>
        <div className="card-section">
          <form onSubmit={ handleSubmit(this.handleFormSubmission) }>
            { errorMessage ? (
              <div className="alert callout">
                <p>{ errorMessage }</p>
              </div>
            ) : null }
            <fieldset>
              <label>
                <span>Email</span>
                <Field name="email" type="text" component="input" />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <span>Password</span>
                <Field name="password" type="password" component="input" />
              </label>
            </fieldset>
            <button type="submit" className="primary button">Sign up!</button>
          </form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" }),
)(Signup);
