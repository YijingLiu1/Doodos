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
        // const titles = [];
        // const pics = [];
        // const authors = [];
        // const ids = [];
        // for (let i = 0; i < posts.length; i++) {
        //     titles.push(posts[i].title);
        //     pics.push(posts[i].imageUrl);
        //     authors.push(posts[i].name);
        //     ids.push(posts[i]._id);
        // }
        // Have to convert the object before use
        const postsObject = {};
        for (let k in posts) {
            postsObject[k] = posts[k];
        }
        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title>Posts for You</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                        <Col sm={6} md={3}><PostItem post={postsObject[0]} /></Col>
                        <Col sm={6} md={3}><PostItem post={postsObject[1]} /></Col>
                        <Col sm={6} md={3}><PostItem post={postsObject[2]} /></Col>
                        <Col sm={6} md={3}><PostItem post={postsObject[3]} /></Col>
                    </Row>
                </Panel.Body>
            </Panel>
        );
    }
}
