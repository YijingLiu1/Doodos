import React from 'react';
import {
    NavItem, Modal, Button, NavDropdown, MenuItem,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';
import SignIn from "./SignIn.jsx";
import {Link} from "react-router-dom";

class SignInNavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            disabled: true,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {
        const clientId = window.ENV.GOOGLE_CLIENT_ID;
        if (!clientId) return;
        window.gapi.load('auth2', () => {
            if (!window.gapi.auth2.getAuthInstance()) {
                window.gapi.auth2.init({ client_id: clientId }).then(() => {
                    this.setState({ disabled: false });
                });
            }
        });
    }

    async signIn() {
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

    async signOut() {
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
        // const { user } = this.props;
        // if (user.signedIn) {
        //     return (
        //         <NavDropdown title={user.givenName} id="user">
        //             <MenuItem onClick={this.signOut}>Sign out</MenuItem>
        //         </NavDropdown>
        //     );
        // }

        const { showing, disabled } = this.state;
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
                        <SignIn />
                        <p style={{fontSize: "15px", fontWeight: "bold", marginTop: "10px"}}>or</p>
                        <Button
                            block
                            disabled={disabled}
                            bsStyle="primary"
                            onClick={this.signIn}
                        >
                            <img src="https://goo.gl/4yjp6B" alt="Sign In" />
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <p className="my-1" style={{float: "left"}}>
                            Don't have an account? <br/>
                            <Link to="/register" style={{float: "left"}} onClick={this.hideModal}>Sign Up</Link>
                        </p>
                        <Button onClick={this.hideModal} style={{float: "right", height: "40px"}}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default withToast(SignInNavItem);
