import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger, Col,
} from 'react-bootstrap';

import withToast from '../withToast.jsx';
import NotFound from "../NotFound.jsx";
import Item from "./Item.jsx";
import NumInput from "../NumInput.jsx";

class StoreItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    render() {
        const { showing } = this.state;
        return (
            <React.Fragment>
                <div className="grid">
                    <figure className="effect-sadie" onClick={this.showModal}>
                        <img src="/static/images/2.jpg" alt="img01"/>
                        <figcaption>
                            <p>Item Title</p>
                            <a href="/post/1/" data-toggle="modal" data-target="#theModal">View more</a>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <div align="left" style={{float: 'left'}}><a href="/user/1/">$XX.xx</a></div>
                    <div align="right">
                        <Form inline>
                            <Button bsSize="xsmall"><Glyphicon glyph="minus" /></Button>
                            <FormGroup bsSize="sm">
                                <FormControl
                                    componentClass={NumInput}
                                    name="effort"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
                        </Form>
                    </div>
                </div>
                <p></p><p></p>
                <Modal keyboard show={showing} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Item />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar style={{float: "right"}}>
                            <Button
                                type="button"
                                bsStyle="primary"
                            >
                                Like
                            </Button>
                            <Button bsStyle="link" onClick={this.hideModal}>Back</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withToast(withRouter(StoreItem));
