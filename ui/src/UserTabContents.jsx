import React from "react";
import {Col, Row} from "react-bootstrap";
import PostItem from "./PostItem.jsx";

export default function UserTabContents({ tab }) {
    if (tab === "likes") {
        return (
            <h3>This is a placeholder for likes</h3>
        )
    }
    else if (tab === "about") {
        return (
            <h3>This is a placeholder for about</h3>
        )
    }
    else if (tab === "description") {
        return (
            <h3>This is a placeholder for description</h3>
        )
    }
    else if (tab === "attenders") {
        return (
            <h3>This is a placeholder for attenders</h3>
        )
    }
    else {
        return (
            <Row>
                <Col sm={6} md={3}>
                    <PostItem />
                </Col>
                <Col sm={6} md={3}>
                    <PostItem />
                </Col>
                <Col sm={6} md={3}>
                    <PostItem />
                </Col>
                <Col sm={6} md={3}>
                    <PostItem />
                </Col>
            </Row>
        )
    }
}
