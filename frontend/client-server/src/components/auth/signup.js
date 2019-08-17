import React, { Component } from 'react';

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
                <input type="text" />
              </label>
            </fieldset>
            <fieldset>
              <label>
                <span>Password</span>
                <input type="text" />
              </label>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
};

export default Signup;
