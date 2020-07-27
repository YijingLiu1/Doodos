import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger, Col,
} from 'react-bootstrap';

import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';
import NotFound from "./NotFound.jsx";
import Post from "./Post.jsx";

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showModal() {
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.hideModal();
        const form = document.forms.issueAdd;
        const issue = {
            owner: form.owner.value,
            title: form.title.value,
            due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
        };

        const query = `mutation issueAdd($issue: IssueInputs!) {
        issueAdd(issue: $issue) {
          id
        }
      }`;
        const { showError } = this.props;
        const data = await graphQLFetch(query, { issue }, showError);
        if (data) {
            const { history } = this.props;
            history.push(`/edit/${data.issueAdd.id}`);
        }
    }

    render() {
        const { showing } = this.state;
        return (
            <React.Fragment>
                <div className="grid">
                    <figure className="effect-sadie" onClick={this.showModal}>
                        <img src="/static/images/2.jpg" alt="img01"/>
                        <figcaption>
                            <p>Post Title</p>
                            <a href="http://localhost:8000/post/1/" data-toggle="modal" data-target="#theModal">View more</a>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <div align="left" style={{float: 'left'}}><a href="http://localhost:8000/user/1/">Author Name</a></div>
                    <div align="right"><Button bsSize="xsmall"><Glyphicon glyph="heart" /></Button></div>
                </div>
                <p></p><p></p>
                <Modal id="theModal" keyboard show={showing} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Post />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar>
                            <Button
                                type="button"
                                bsStyle="primary"
                                onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                            <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withToast(withRouter(PostItem));
