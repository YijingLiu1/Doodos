import React from "react";
import {
    Panel, Row, Col, Thumbnail, Button,
    Glyphicon, Modal, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar,
} from "react-bootstrap";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import PostItem from "../Discover/PostItem.jsx";
import EventItem from "../Discover/EventItem.jsx";
import { Link } from 'react-router-dom';
import GroupsContents from './GroupsContents.jsx';

class Groups extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="WithSideBar">
                <ProSidebar>
                    <SidebarHeader>Groups</SidebarHeader>
                    <SidebarContent>
                        <Menu>
                            <MenuItem>
                                Dashboard
                                <Link to="/groups/" />
                            </MenuItem>
                            <SubMenu title="More Groups">
                                <MenuItem>Suggested for You</MenuItem>
                                <SubMenu title="Explore by Category">
                                    <MenuItem>All Categories</MenuItem>
                                    <MenuItem>Category 1</MenuItem>
                                    <MenuItem>Category 2</MenuItem>
                                    <MenuItem>Category 3</MenuItem>
                                    <MenuItem>Category 4</MenuItem>
                                    <MenuItem>Category 5</MenuItem>
                                    <MenuItem>Category 6</MenuItem>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu title="Your Groups" defaultOpen={true}>
                                <MenuItem>
                                    Group 1
                                    <Link to="/groups/1" />
                                </MenuItem>
                                <MenuItem>
                                    Group 2
                                    <Link to="/groups/2" />
                                </MenuItem>
                                <MenuItem>
                                    Group 3
                                    <Link to="/groups/3" />
                                </MenuItem>
                                <MenuItem>
                                    Group 4
                                    <Link to="/groups/4" />
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
                <div className="GroupsContentsWrapper">
                    <GroupsContents />
                </div>
            </div>
        )
    }
}

export default Groups;
