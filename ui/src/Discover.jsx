import React from "react";
import {
    Panel, Row, Col, Thumbnail, Button,
    Glyphicon, Modal, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar,
} from "react-bootstrap";
import Item from "./Item.jsx";

export default function Discover() {
    return (
        <Panel className="panel panel-info">
            <Panel.Heading>
                <Panel.Title>Posts for You</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
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
            </Panel.Body>
        </Panel>
    )
}
