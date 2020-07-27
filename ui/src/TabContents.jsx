import React from "react";
import {Col, Row} from "react-bootstrap";
import Item from "./Item.jsx";

export default function TabContents({ tab }) {
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
    else {
        return (
            <Row>
                <Col sm={6} md={3}>
                    <Item />
                </Col>
                <Col sm={6} md={3}>
                    <Item />
                </Col>
                <Col sm={6} md={3}>
                    <Item />
                </Col>
                <Col sm={6} md={3}>
                    <Item />
                </Col>
            </Row>
        )
    }
}
