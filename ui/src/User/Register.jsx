import React from "react";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Register() {
    return (
        <React.Fragment>
            <div  style={{margin: "50px 100px"}}>
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead">
                    <i className="fas fa-user" /> Create Your Account
                </p>
                <form className="form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                        /> <br/>
                        <small className="form-text">
                            This site uses Gravatar so if you want a profile image, use a
                            Gravatar email
                        </small>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
                <p className="my-1">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </React.Fragment>
    )
}

