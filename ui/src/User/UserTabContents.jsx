import React from "react";
import {Col, Row} from "react-bootstrap";
import UserItem from "./UserItem.jsx";

export default function UserTabContents({ tab, social, likes, posts }) {
    if (tab === "likes") {
        return (
            <Row>
                {likes}
            </Row>
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
    else if (tab === "following") {
        return (
            <h3>123</h3>
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
