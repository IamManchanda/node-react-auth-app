import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

const Signup = class extends Component {
  handleFormSubmission = (formProps) => {
    console.log(formProps);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="card">
        <div className="card-divider">
          Signup!
        </div>
        <div className="card-section">
          <form onSubmit={ handleSubmit(this.handleFormSubmission) }>
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

export default reduxForm({
  form: "signup",
})(Signup);
