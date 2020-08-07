import React from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, Grid, Col,
    MenuItem, Glyphicon,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PostAddNavItem from './Discover/PostAddNavItem.jsx';
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
                <LinkContainer exact to="/discover/">
                    <NavItem>Discover</NavItem>
                </LinkContainer>
                <LinkContainer to="/category/">
                    <NavItem>Category</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/doodlemaps/">
                    <NavItem>DoodleMaps</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/store/">
                    <NavItem>Store</NavItem>
                </LinkContainer>
            </Nav>

            <Nav pullRight>
                <PostAddNavItem user={user} onUserChange={onUserChange} />
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
        const token = localStorage.token ? localStorage.token : null;
        this.state = { user: { token } };
        this.onUserChange = this.onUserChange.bind(this);
    }

    async componentDidMount() {
        const { user: { token } }  = this.state;
        if (token == null) {
            this.setState({ user: { signedIn: false } });
        } else {
            const sss = axios.create({
                baseURL: '/api',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                }
            });
            const user = await sss.get('/auth');
            this.setState({ user: { name: user.data.name, signedIn: true, token } });
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
