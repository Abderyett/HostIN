/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

export function Reset() {
  return (
    <div className="form-container">
      <div className="wrap">
        <div className="form-wrapper">
          <form autoComplete="off">
            <h2 className="form-heading">Reset your password</h2>
            <div className="reset-text">
              Enter the email address associated with your account, and we'll send you a link to reset your password.
            </div>

            <div className="email-input">
              <label htmlFor="email"> Email</label>
              <input id="email" type="email" name="email" />
            </div>

            <button className="submit-btn" type="submit">
              Continue
            </button>
            <Link to="/login"> Return to sign in</Link>
          </form>
        </div>
        <div className="register-text">
          Don't have an account? &nbsp; <Link to="/register"> Sign up</Link>
        </div>
      </div>
    </div>
  );
}
