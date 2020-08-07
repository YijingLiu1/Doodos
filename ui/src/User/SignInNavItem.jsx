import React from 'react';
import {
    NavItem, Modal, Button, NavDropdown, MenuItem,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';
import SignIn from "./SignIn.jsx";
import {Link} from "react-router-dom";
import axios from "axios";
import {LinkContainer} from "react-router-bootstrap";

class SignInNavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            disabled: true,
            signedIn: null,
            loading: true,
            user: null,
        };
        if (localStorage.token) {
            this.state ={ user: { token: localStorage.token }};
            console.log(`set ${this.state.user}`);
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.googleSignIn = this.googleSignIn.bind(this);
        this.googleSignOut = this.googleSignOut.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        // const clientId = window.ENV.GOOGLE_CLIENT_ID;
        // if (!clientId) return;
        // window.gapi.load('auth2', () => {
        //     if (!window.gapi.auth2.getAuthInstance()) {
        //         window.gapi.auth2.init({ client_id: clientId }).then(() => {
        //             this.setState({ disabled: false });
        //         });
        //     }
        // });
    }

    // Currently unused
    async googleSignIn() {
        this.hideModal();
        const { showError } = this.props;
        let googleToken;
        try {
            const auth2 = window.gapi.auth2.getAuthInstance();
            const googleUser = await auth2.signIn();
            googleToken = googleUser.getAuthResponse().id_token;
        } catch (error) {
            showError(`Error authentication with Google: ${error.error}`);
        }

        try {
            const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
            const response = await fetch(`${apiEndpoint}/signin`, {
                method: 'POST',
                credentials: 'include',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify({ google_token: googleToken }),
            });
            const body = await response.text();
            const result = JSON.parse(body);
            const { signedIn, givenName } = result;

            const { onUserChange } = this.props;
            onUserChange({ signedIn, givenName });
        } catch (error) {
            showError(`Error signing into the app: ${error}`);
        }
    }

    // Currently unused
    async googleSignOut() {
        const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
        const { showError } = this.props;
        try {
            await fetch(`${apiEndpoint}/signout`, {
                method: 'POST',
                credentials: 'include',
            });
            const auth2 = window.gapi.auth2.getAuthInstance();
            await auth2.signOut();
            const { onUserChange } = this.props;
            onUserChange({ signedIn: false, givenName: '' });
        } catch (error) {
            showError(`Error signing out: ${error}`);
        }
    }

    async signOut() {
        const { onUserChange } = this.props;
        localStorage.removeItem('token');
        onUserChange({ signedIn: false, givenName: '' });
    }

    showModal() {
        const clientId = window.ENV.GOOGLE_CLIENT_ID;
        const { showError } = this.props;
        if (!clientId) {
            showError('Missing environment variable GOOGLE_CLIENT_ID');
            return;
        }
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    render() {
        const { user } = this.props;
        console.log(user);
        console.log(localStorage.token);
        if (user.token && user.signedIn) {
            return (
                <NavDropdown title={user.name} id="user">
                    <LinkContainer to="/dashboard/">
                        <MenuItem>Dashboard</MenuItem>
                    </LinkContainer>
                    <MenuItem onClick={this.signOut}>Sign out</MenuItem>
                </NavDropdown>
            );
        }

        const { showing, disabled } = this.state;
        const { showSuccess, showError, onUserChange } = this.props;
        return (
            <>
                <NavItem onClick={this.showModal}>
                    Sign in
                </NavItem>
                <Modal keyboard show={showing} onHide={this.hideModal} bsSize="sm">
                    <Modal.Header closeButton>
                        <Modal.Title className="large text-primary">Sign in</Modal.Title>
                    </Modal.Header>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <Modal.Body>
                        <SignIn showSuccess={showSuccess} showError={showError} onUserChange={onUserChange}/>
                        <p style={{fontSize: "15px", fontWeight: "bold", marginTop: "10px"}}>or</p>
                        <Button
                            block
                            disabled={disabled}
                            bsStyle="primary"
                            onClick={this.signIn}
                        >
                            <img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" alt="Sign In" />
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <p className="my-1" style={{float: "left"}}>
                            Don't have an account? <br/>
                            <Link to="/register/" style={{float: "left"}} onClick={this.hideModal}>Sign Up</Link>
                        </p>
                        <Button onClick={this.hideModal} style={{float: "right", height: "40px"}}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default withToast(SignInNavItem);
