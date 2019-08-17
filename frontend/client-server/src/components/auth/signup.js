import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

const Signup = class extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-divider">
          Signup!
        </div>
        <div className="card-section">
          <form>
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
          </form>
        </div>
      </div>
    );
  }
};

export default reduxForm({
  form: "signup",
})(Signup);
