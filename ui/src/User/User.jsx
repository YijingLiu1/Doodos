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
        console.log(posts);
        console.log(postsObject);
        const postItems = postsObject.map((post) => (
            <Col xs={12} sm={6} md={4} key={post._id}><PostItem post={post} /></Col>
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
                            <UserTabContents tab={tab} social={social} posts={postItems} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const UserWithToast = withToast(withRouter(User));

export default UserWithToast;
