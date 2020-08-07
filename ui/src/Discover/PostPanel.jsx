import PostItem from "./PostItem.jsx";
import {Col, Panel, Row} from "react-bootstrap";
import React from "react";
import api from "../api";

export default class PostPanel extends React.Component {
    constructor() {
        super();
        this.state = { posts: [] };
    }

    componentDidMount() {
        const { posts } = this.state;
        if (posts.length === 0) this.loadData();
    }

    async loadData() {
        const posts = await api.get("/posts");
        if (posts) {
            this.setState({ posts: posts.data });
        }
    }

    render() {
        const { posts } = this.state;
        // Have to convert the object before use
        const postsObject = [];
        for (let k in posts) {
            postsObject.push(posts[k]);
        }
        const postItems = postsObject.map((post) => (
            <Col xs={12} sm={6} md={3} key={post._id}><PostItem post={post} /></Col>
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
