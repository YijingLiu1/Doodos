import PostItem from "./PostItem.jsx";
import {Col, Panel, Row} from "react-bootstrap";
import React from "react";
import api from "../api";
import axios from "axios";

export default class PostPanel extends React.Component {
    constructor() {
        super();
        this.state = { posts: [], user: null };
    }

    componentDidMount() {
        const { posts } = this.state;
        if (posts.length === 0) this.loadData();
    }

    async loadData() {
        const api = axios.create({
            baseURL: '/api',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        });
        const profile = await api.get('/profile/me');
        if (profile) {
            this.setState({ profile: profile.data });
            const profileObject = {};
            for (let k in profile.data) {
                profileObject[k] = profile.data[k];
            }
            this.setState({ user: profileObject.user._id });
        }
        const posts = await api.get("/posts");
        if (posts) {
            this.setState({ posts: posts.data });
        }
    }

    render() {
        const { posts, user } = this.state;
        // Have to convert the object before use
        const postsObject = [];
        for (let k in posts) {
            postsObject.push(posts[k]);
        }
        const postItems = postsObject.map((post) => (
            <Col xs={12} sm={6} md={3} key={post._id}><PostItem id={post._id} user={user} /></Col>
        ));
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title>What's New</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                        {postItems}
                    </Row>
                </Panel.Body>
            </Panel>
        );
    }
}
