import React from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, Grid, Col,
    MenuItem, Glyphicon,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import IssueAddNavItem from './ItemAddNavItem.jsx';

import Contents from './Contents.jsx';
import UserContext from './UserContext.js';
import SignInNavItem from './SignInNavItem.jsx';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';

function NavBar({ user, onUserChange }) {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>Doodos</Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <LinkContainer exact to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/discover">
                    <NavItem>Discover</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/groups">
                    <NavItem>Groups</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/doodlemaps">
                    <NavItem>DoodleMaps</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/store">
                    <NavItem>Store</NavItem>
                </LinkContainer>
            </Nav>

            <Nav pullRight>
                <IssueAddNavItem user={user} />
                <SignInNavItem user={user} onUserChange={onUserChange} />
                <NavDropdown
                    id="user-dropdown"
                    title={<Glyphicon glyph="option-vertical" />}
                    noCaret
                >
                    <LinkContainer to="/about">
                        <MenuItem>About</MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

function Footer() {
    return (
        <small className="Footer">
            <p className="text-center">
                UI v0.2.0 (Profile Page Added)
                {' '}
                <a href="https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech">
                    GitHub repository
                </a>
            </p>
        </small>
    );
}

export default class Page extends React.Component {
    static async fetchData(cookie) {
        const query = `query { user {
      signedIn givenName
    }}`;
        const data = await graphQLFetch(query, null, null, cookie);
        return data;
    }

    constructor(props) {
        super(props);
        const user = store.userData ? store.userData.user : null;
        delete store.userData;
        this.state = { user };

        this.onUserChange = this.onUserChange.bind(this);
    }

    async componentDidMount() {
        const { user } = this.state;
        if (user == null) {
            const data = await Page.fetchData();
            this.setState({ user: data.user });
        }
    }

    onUserChange(user) {
        this.setState({ user });
    }

    render() {
        const { user } = this.state;
        if (user == null) return null;

        return (
            <div>
                <NavBar user={user} onUserChange={this.onUserChange} />
                <Grid fluid bsClass="contents">
                    <UserContext.Provider value={user}>
                        <Contents />
                    </UserContext.Provider>
                </Grid>
                <Footer />
            </div>
        );
    }
}
