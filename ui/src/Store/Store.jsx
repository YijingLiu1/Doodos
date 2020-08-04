import React from "react";
import {
    Panel, Row, Col, Thumbnail, Button,
    Glyphicon, Modal, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar,
} from "react-bootstrap";
import StoreItem from "./StoreItem.jsx";
import PromotionBanner from "./PromotionBanner.jsx";

class Store extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="EventSlides">
                    <PromotionBanner />
                </div>
                <Panel className="PostsPanel">
                    <Panel.Heading>
                        <Panel.Title>Items for You</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Row>
                            <Col sm={6} md={3}>
                                <StoreItem />
                            </Col>
                            <Col sm={6} md={3}>
                                <StoreItem />
                            </Col>
                            <Col sm={6} md={3}>
                                <StoreItem />
                            </Col>
                            <Col sm={6} md={3}>
                                <StoreItem />
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default Store;
