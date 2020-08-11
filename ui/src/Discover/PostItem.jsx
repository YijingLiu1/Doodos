import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger, Col,
} from 'react-bootstrap';

import withToast from '../withToast.jsx';
import Post from "./Post.jsx";

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            liked: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.likePost = this.likePost.bind(this);
        this.unlikePost = this.unlikePost.bind(this);
    }

    showModal() {
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    likePost() {
        this.setState({ liked: true});
    }

    unlikePost() {
        this.setState({ liked: false});
    }

    render() {
        const { showing, liked } = this.state;
        const { post } = this.props;
        // Have to convert the object before use
        const postObject = {};
        for (let k in post) {
            postObject[k] = post[k];
        }
        const link = `/post/${postObject._id}/`;
        const authorLink = `/user/${postObject.user}/`;
        const like = <div align="right"><Button bsSize="xsmall" onClick={this.likePost}><Glyphicon glyph="heart" /></Button></div>;
        const unlike = <div align="right"><Button bsStyle="primary" bsSize="xsmall" onClick={this.unlikePost}><Glyphicon glyph="heart" /></Button></div>;
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
                    {liked? unlike:like}
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

export default withToast(withRouter(PostItem));
