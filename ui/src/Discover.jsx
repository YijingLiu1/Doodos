import React from "react";
import {
    Panel, Row, Col, Thumbnail, Button,
    Glyphicon, Modal, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar,
} from "react-bootstrap";
import Item from "./Item.jsx";
import EventItem from "./EventItem.jsx";

class Discover extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="EventSlides">
                    <EventItem/>
                </div>
                <Panel className="PostsPanel">
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
            </div>
        )
    }
}

export default Discover;
