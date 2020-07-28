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

function NavBar() {
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
                <SignInNavItem />
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
    render() {
        return (
            <div>
                <NavBar />
                <Grid fluid bsClass="contents">
                    <UserContext.Provider>
                        <Contents />
                    </UserContext.Provider>
                </Grid>
                <Footer />
            </div>
        );
    }
}
