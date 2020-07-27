import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image,
} from 'react-bootstrap';
import withToast from './withToast.jsx';
import UserContext from './UserContext.js';
import Item from "./Item.jsx";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0
        }
    }

    render() {
        const { id } = this.state;
        const { match: { params: { id: propsId } } } = this.props;
        if (id == null) {
            if (propsId != null) {
                return <h3>{`User with ID ${id} not found.`}</h3>;
            }
            return null;
        }

        return (
            <div className="Profile">
                <div className="ProfileBanner">
                    <figure>
                        <img src="/static/images/text.jpg" alt="img01"/>
                    </figure>
                </div>
                <div className="ProfileWrap">
                    <div className="ProfileSidebar">
                        <div className="AvatarContainer">
                            <Image src="/static/images/3.jpg" alt="profile pic" circle/>
                        </div>
                        <h3>User ID: {propsId}</h3>
                        <p>Title</p>
                        <p>Location</p>
                        <Button>Follow +</Button>
                    </div>
                    <div className="ProfileContents">
                        <ul className="ProfileTabs">
                            <li className="tab">
                                <a href="/user/1/posts">Posts</a>
                            </li>
                            <li className="tab"><a>Likes</a></li>
                            <li className="tab"><a>About</a></li>
                        </ul>
                        <div className="ProfileTabContents">
                            Me too
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const UserWithToast = withToast(withRouter(User));

export default UserWithToast;
