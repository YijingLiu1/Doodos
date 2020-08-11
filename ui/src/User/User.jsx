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
import PostItem from "../Discover/PostItem.jsx";
import axios from "axios";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null,
            me: null
        }
    }

    componentDidMount() {
        const { user } = this.state;
        if (user == null) this.loadData();
    }

    async loadData() {
        let { match: { params: { id } } } = this.props;
        if (id == null) id = this.props.id;
        const profile = await api.get(`/profile/user/${id}`);
        if (profile) {
            this.setState({ profile: profile.data });
            const user = await api.get(`/users/${id}`);
            const posts = await api.get(`/posts/byuser/${id}`);
            if (user) {
                this.setState({ user: user.data });
            }
            if (posts) {
                this.setState({ posts: posts.data });
            }
        }
        if (localStorage.token) {
            try {
                const api = axios.create({
                    baseURL: '/api',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': localStorage.token
                    }
                });
                const profile = await api.get('/profile/me');
                const profileObject = {};
                for (let k in profile.data) {
                    profileObject[k] = profile.data[k];
                }
                this.setState({ me: profileObject.user._id });
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    async followUser() {
        const { match: { params: { id } } } = this.props;
        const { me } = this.state;
        if (me != null) {
            try {
                const api = axios.create({
                    baseURL: '/api',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': localStorage.token
                    }
                });
                await api.post(`/events/registration/${id}`);
            } catch (err) {
                console.error(err.message);
            }
            this.setState({ liked: true});
        } else {
            showError("Must sign in to join events.");
        }
    }

    render() {
        const { match: { params: { tab } } } = this.props;
        const { user, profile, posts } = this.state;
        // Have to convert the object before use
        const userObject = {};
        const profileObject = {};
        const social = [];
        for (let k in user) {
            userObject[k] = user[k];
        }
        for (let k in profile) {
            profileObject[k] = profile[k];
        }
        for (let k in profileObject.social) {
            social.push(<p key={k}>{k}: <a>{profileObject.social[k]}</a></p>)
        }
        const postsObject = [];
        for (let k in posts) {
            postsObject.push(posts[k]);
        }
        const postItems = postsObject.map((post) => (
            <Col xs={12} sm={6} md={4} key={post._id}><PostItem id={post._id} /></Col>
        ));
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
                            <Image className="img-circle" src={userObject.avatar} alt="profile pic" circle/>
                        </div>
                        <h3>{userObject.name}</h3>
                        <p>{profileObject.bio}</p>
                        <p>{profileObject.status}</p>
                        <p>{profileObject.location}</p>
                        <Button bsStyle="primary" onClick={this.followUser}>Follow +</Button>
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
                            <UserTabContents tab={tab} social={social} user={user} posts={postItems} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const UserWithToast = withToast(withRouter(User));

export default UserWithToast;
