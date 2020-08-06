import React from "react";
import {Col, Row} from "react-bootstrap";
import PostItem from "../Discover/PostItem.jsx";

export default function UserTabContents({ tab, social, posts }) {
    if (tab === "likes") {
        return (
            <h3>This is a placeholder for likes</h3>
        )
    }
    else if (tab === "about") {
        return (
            <div>
                <h3>Social Network:</h3>
                <div>{social}</div>
            </div>
        )
    }
    else {
        return (
            <Row>
                {posts}
            </Row>
        )
    }
}
