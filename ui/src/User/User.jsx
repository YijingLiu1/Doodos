import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';
import UserTabContents from "./UserTabContents.jsx";
import api from "../api";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        const { user } = this.state;
        if (user == null) this.loadData();
    }

    async loadData() {
        let { match: { params: { id } } } = this.props;
        if (id == null) id = this.props.id;
        const user = await api.get(`/profile/user/${id}`);
        if (user) {
            this.setState({ user: user.data });
        }
    }

    render() {
        const { match: { params: { tab } } } = this.props;
        const { user } = this.state;
        // Have to convert the object before use
        const userObject = {};
        for (let k in user) {
            userObject[k] = user[k];
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
                        <h3>{userObject.name}</h3>
                        <p>Title</p>
                        <p>Location</p>
                        <Button bsStyle="primary">Follow +</Button>
                    </div>
                    <div className="ProfileContents">
                        <ul className="ProfileTabs">
                            <li className="tab">
                                <Link to="./posts">Posts</Link>
                            </li>
                            <li className="tab">
                                <Link to="./likes">Likes</Link>
                            </li>
                            <li className="tab">
                                <Link to="./about">About</Link>
                            </li>
                        </ul>
                        <div className="ProfileTabContents">
                            <UserTabContents tab={tab} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const UserWithToast = withToast(withRouter(User));

export default UserWithToast;
