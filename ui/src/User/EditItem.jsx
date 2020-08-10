import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger, Col,
} from 'react-bootstrap';

import withToast from '../withToast.jsx';
import Post from "../discover/Post.jsx";

class PostItem extends React.Component {
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
        const { post } = this.props;
        // Have to convert the object before use
        const postObject = {};
        for (let k in post) {
            postObject[k] = post[k];
        }
        const link = `/post/${postObject._id}/`;
        const authorLink = `/user/${postObject.user}/`;
        return (
            <React.Fragment>
                <div className="grid">
                    <figure className="effect-sadie" onClick={this.showModal}>
                        <img src={postObject.imageUrl} alt="img01"/>
                        <figcaption>
                            <p>{postObject.title}</p>
                            <a href={link} data-toggle="modal" data-target="#theModal">View more</a>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <div align="left" style={{float: 'left'}}><Link to={authorLink}>{postObject.name}</Link></div>
                    <div align="right"><Button bsSize="xsmall"><Glyphicon glyph="heart" /></Button></div>
                </div>
                <p></p><p></p>
                <Modal keyboard show={showing} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{postObject.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Post id={postObject._id} />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar style={{float: "right"}}>
                            <Button
                                bsStyle="primary"
                            >
                                Edit
                            </Button>
                            <Button
                                bsStyle="danger"
                            >
                                Delete
                            </Button>
                            <Button bsStyle="link" onClick={this.hideModal}>Back</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withToast(withRouter(PostItem));
