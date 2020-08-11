import React from "react";
import {Col, Row} from "react-bootstrap";
import UserItem from "./UserItem.jsx";

export default function UserTabContents({ tab, social, user, posts }) {
    if (tab === "likes") {
        return (
            <h3><UserItem user={user} /></h3>
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
