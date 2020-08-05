import React from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, Grid, Col,
    MenuItem, Glyphicon,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ItemAddNavItem from './ItemAddNavItem.jsx';
import Contents from './Routing/Contents.jsx';
import UserContext from './UserContext.js';
import SignInNavItem from './User/SignInNavItem.jsx';
import store from './store.js';
import axios from "axios";
import setAuthToken from "./setAuthToken.js";

function NavBar({ user, onUserChange }) {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>Doodos</Navbar.Brand>
            </Navbar.Header>
            <Nav>
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
                <ItemAddNavItem />
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
                UI v0.4.0 (Regular SignIn Added)
                {' '}
                <a href="https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject-ArchiTech">
                    GitHub repository
                </a>
            </p>
        </small>
    );
}

export default class Page extends React.Component {
    // static async fetchData(localStorage) {
    //     if (localStorage.token !== null) {
    //         const api = axios.create({
    //             baseURL: '/api',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'token': localStorage.token
    //             }
    //         });
    //         const data = await api.get("/auth");
    //         return data;
    //     }
    //     return {};
    // }

    constructor(props) {
        super(props);
        const user = store.userData ? store.userData.user : null;
        delete store.userData;
        this.state = { user };
        // setAuthToken(localStorage.token);
        this.onUserChange = this.onUserChange.bind(this);
    }

    async componentDidMount() {
        const { user }  = this.state;
        if (user == null) {
            const data = null;
            // const data = await Page.fetchData(localStorage);
            if (data) {
                this.setState({ user: { name: data.data.name, signedIn: true } });
            } else {
                this.setState({ user: { signedIn: false } });
            }

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
                    <UserContext.Provider>
                        <Contents />
                    </UserContext.Provider>
                </Grid>
            </div>
        );
    }
}
