/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <div className="form-container">
      <div className="wrap">
        <div className="form-wrapper">
          <form>
            <h2 className="form-heading">Sign in to your account</h2>
            <div className="email-input">
              <label htmlFor="email"> Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div className="password-input">
              <div className="password-text">
                <label htmlFor="password"> Password</label>

                <Link className="password-reset" to="/reset">
                  Forgot your password?
                </Link>
              </div>

              <input id="password" type="password" name="password" />
            </div>
            <button className="submit-btn" type="submit">
              Continue
            </button>
          </form>
        </div>
      </div>
      Don't have an account? <Link to="/register">Sign up</Link>
    </div>
  );
}
