import React from "react";
import { Redirect } from 'react-router-dom';
import api from "../api.js";
import axios from "axios";
import setAuthToken from "../setAuthToken.js";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: null, loading: true, user: null,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    async loadUser() {
        const res = await api.get('/auth');
        if (res) {
            this.setState({ signedIn: true, loading: false, token: res.data })
        }
    }

    async signIn(email, password) {
        const { showSuccess, showError, onUserChange } = this.props;
        const body = { email, password };
        try {
            const res = await api.post('/auth', body);
            const sss = axios.create({
                baseURL: '/api',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': res.data.token
                }
            });
            const user = await sss.get('/auth');
            setAuthToken(res.data.token);
            console.log(localStorage);
            onUserChange({ signedIn: true, loading: false, token: res.data.token, name: user.data.name })
            showSuccess("Signed in success");
        } catch (err) {
            showError(`Failed to sign in: ${err.message}`);
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const form = document.forms.signInForm;
        const user = {
            email: form.email.value,
            password: form.password.value,
        };
        const { email, password } = user;
        this.signIn(email, password).then();
    };


    render() {
        const { signedIn } = this.state;
        if (signedIn) {
            return <Redirect to="/" />
        }

        return (
            <React.Fragment>
                <p className="lead">
                    <i className="fas fa-user" /> Sign Into Your Account
                </p>
                <form className="form" name="signInForm" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            required/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
            </React.Fragment>
        )
    }
}

export default SignIn;
