/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

export function Register() {
  return (
    <div className="form-container">
      <div className="wrap">
        <div className="form-wrapper">
          <form autoComplete="off">
            <h2 className="form-heading">Sign in to your account</h2>
            <div className="email-input">
              <label htmlFor="email"> Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div className="email-input">
              <label htmlFor="name"> Full name</label>
              <input id="name" type="name" name="name" />
            </div>
            <div className="password-input">
              <div className="password-text">
                <label htmlFor="password"> Password</label>
              </div>

              <input id="password" type="password" name="password" />
            </div>
            <div className="password-input">
              <div className="password-text">
                <label htmlFor="confirm-password"> Confirm password</label>
              </div>

              <input id="confirm-password" type="password" name="password" />
            </div>
            <button className="submit-btn" type="submit">
              Create account
            </button>
          </form>
        </div>
        <div className="register-text">
          Have an account? &nbsp; <Link to="/login"> Sign in</Link>
        </div>
      </div>
    </div>
  );
}
