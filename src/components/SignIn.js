/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form>
          <h2>Sign in to your account</h2>
          <label htmlFor="email"> Email</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="password"> Password</label> <Link to="/reset">Forgot your password?</Link>
          <input id="password" type="password" name="password" />
          <button type="submit">Contenue</button>
        </form>
      </div>
      Don't have an account? <Link to="/register">Sign up</Link>
    </div>
  );
}
