/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

export function Register() {
  return (
    <div className="form-container">
      <div className="wrap">
        <div className="form-wrapper">
          <Formik
            initialValues={{ email: '', name: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Please enter valide email adress').required('Must enter email'),
              name: Yup.string()
                .required('Must enter name')
                .min(2, 'Must at least 2 characters long.')
                .max(25, 'Name Must be 25 characters or less'),
              password: Yup.string()
                .required('Must enter password')
                .min(5, 'Must at least 5 characters long.')
                .max(255, 'Name Must less than 255 characters'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            })}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <form autoComplete="off">
                <h2 className="form-heading">Sign in to your account</h2>
                <div className="email-input">
                  <label htmlFor="email"> Email</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? 'has-error' : null}
                  />
                </div>
                <div className="email-input">
                  <label htmlFor="name"> Full name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name && errors.name ? 'has-error' : null}
                  />
                </div>
                <div className="password-input">
                  <div className="password-text">
                    <label htmlFor="password"> Password</label>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={touched.password && errors.password ? 'has-error' : null}
                  />
                </div>
                <div className="password-input">
                  <div className="password-text">
                    <label htmlFor="confirm-password"> Confirm password</label>
                  </div>

                  <input
                    id="confirm-password"
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    className={touched.confirmPassword && errors.confirmPassword ? 'has-error' : null}
                  />
                </div>
                <button className="submit-btn" type="submit">
                  Create account
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="register-text">
          Have an account? &nbsp; <Link to="/login"> Sign in</Link>
        </div>
      </div>
    </div>
  );
}
