import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';
import PicUpload from "./PicUpload.jsx";
import axios from "axios";

class PostAddNavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            postAdded: false,
            imageUrl: ''
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showWarning = this.showWarning.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
    }

    componentDidMount() {
        this.setState({ link: '' });
    }

    showModal() {
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    onUrlChange(imageUrl) {
        this.setState({ imageUrl });
    }


    async handleSubmit(e) {
        e.preventDefault();
        this.hideModal();
        const form = document.forms.postAdd;
        const post = {
            title: form.title.value,
            imageUrl: this.state.imageUrl.imageUrl,
            text: form.description.value,
            date: new Date(),
        };
        const { user } = this.props;
        const api = axios.create({
            baseURL: '/api',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': user.token
            }
        });
        const res = await api.post('/posts', post);
        if (res) {
            const { showSuccess } = this.props;
            showSuccess("New post made.");
            const id = res.data._id;
            const link = `/post/${id}`;
            this.setState({ postAdded: true, link});
        }

    }

    showWarning() {
        const { showError } = this.props;
        showError("Sign in to make a new post.");
    }

    render() {
        const { showing, postAdded, link } = this.state;
        const { user } = this.props;
        if (!user.signedIn) {
            return (
                <React.Fragment>
                    <NavItem onClick={this.showWarning}>
                        <OverlayTrigger
                            placement="left"
                            delayShow={1000}
                            overlay={<Tooltip id="create-issue">Make a New Post</Tooltip>}
                        >
                            <Glyphicon glyph="plus" />
                        </OverlayTrigger>
                    </NavItem>
                </React.Fragment>
            );
        }

        // if (postAdded) return <Redirect to={link} />;

        return (
            <React.Fragment>
                <NavItem onClick={this.showModal}>
                    <OverlayTrigger
                        placement="left"
                        delayShow={1000}
                        overlay={<Tooltip id="create-issue">Make a New Post</Tooltip>}
                    >
                        <Glyphicon glyph="plus" />
                    </OverlayTrigger>
                </NavItem>
                <Modal keyboard show={showing} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Make a New Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form name="postAdd">
                            <FormGroup>
                                <ControlLabel>Title</ControlLabel>
                                <FormControl name="title" autoFocus />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Artwork</ControlLabel>
                                <PicUpload onUrlChange={this.onUrlChange} />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Description</ControlLabel>
                                <FormControl name="description" />
                            </FormGroup>
                        </Form>
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

export default withToast(withRouter(PostAddNavItem));
