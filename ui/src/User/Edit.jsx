import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert,
} from 'react-bootstrap';
import NumInput from '../NumInput.jsx';
import TextInput from '../TextInput.jsx';
import withToast from '../withToast.jsx';
import store from '../store.js';
import UserContext from '../UserContext.js';
import axios from "axios";
import api from "../api";
import PicUpload from "../Discover/PicUpload.jsx";

class Edit extends React.Component {
    constructor() {
        super();
        this.state = {
            post: null,
            userVerified: false,
            loading: true,
            postEdited: false,
            imageUrl: '',
            formerImageUrl: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { post } = this.state;
        if (post == null) this.loadData();
    }

    onUrlChange(imageUrl) {
        this.setState({ imageUrl });
    }

    onChange(event, naturalValue) {
        const { name, value: textValue } = event.target;
        const value = naturalValue === undefined ? textValue : naturalValue;
        this.setState(prevState => ({
            issue: { ...prevState.issue, [name]: value },
        }));
    }

    async handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.postEdit;
        const { imageUrl, formerImageUrl } = this.state;
        const url = imageUrl === ''? formerImageUrl:imageUrl.imageUrl;
        const post = {
            title: form.title.value,
            imageUrl: url,
            text: form.description.value,
        };
        const api = axios.create({
            baseURL: '/api',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        });
        const { match: { params: { id } } } = this.props;
        const res = await api.put(`/posts/byuser/${this.state.post.user}/${id}`, post);
        if (res) {
            const { showSuccess } = this.props;
            showSuccess("Post edited.");
            const id = res.data._id;
            const link = `/post/${id}`;
            this.setState({ postEdited: true, link});
        }
    }

    async loadData() {
        const { match: { params: { id } } } = this.props;
        const api = axios.create({
            baseURL: '/api',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.token
            }
        });
        try {
            const post = await api.get(`/posts/${id}`);
            if (post) {
                this.setState({ post: post.data });
                const profile = await api.get('/profile/me');
                if (profile) {
                    this.setState({ profile: profile.data });
                    const profileObject = {};
                    for (let k in profile.data) {
                        profileObject[k] = profile.data[k];
                    }
                    const userId = profileObject.user._id;
                    if (post.data.user === userId) {
                        this.setState({ userVerified: true });
                        console.log("User verified.")
                    }
                }
            }
        } catch (err) {
            console.error(err.message);
        }
        this.setState({ loading: false });
    }

    render() {
        const { post, userVerified, loading, postEdited, link } = this.state;
        if (loading) return <div>loading...</div>;
        if (post == null) return <h3>Post not found by this id.</h3>;
        if (!userVerified) {
            return <h3>Not authorized for editing this post.</h3>
        }
        // if (postEdited) return <Redirect to={link} />;
        const postObject = {};
        for (let k in post) {
            postObject[k] = post[k];
        }
        const dateString = `${postObject.date}`;
        const date = new Date(dateString).toDateString();

        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title>{`Editing post: ${postObject.title}`}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Form horizontal onSubmit={this.handleSubmit} name="postEdit">
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>Last modified:</Col>
                            <Col sm={9}>
                                <FormControl.Static>
                                    {date.substr(4)}
                                </FormControl.Static>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>Title</Col>
                            <Col sm={9}>
                                <FormControl
                                    componentClass={TextInput}
                                    size={50}
                                    name="title"
                                    value={postObject.title}
                                    onChange={this.onChange}
                                    key={postObject._id}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>Artwork</Col>
                            <Col sm={9}>
                                <PicUpload onUrlChange={this.onUrlChange} imageUrl={postObject.imageUrl} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>Description</Col>
                            <Col sm={9}>
                                <FormControl
                                    componentClass={TextInput}
                                    tag="textarea"
                                    rows={4}
                                    cols={50}
                                    name="description"
                                    value={postObject.text}
                                    onChange={this.onChange}
                                    key={postObject._id}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={3} sm={6}>
                                <ButtonToolbar>
                                    <Button
                                        bsStyle="primary"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                    <LinkContainer to="/dashboard/">
                                        <Button bsStyle="link">Back</Button>
                                    </LinkContainer>
                                </ButtonToolbar>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel.Body>
            </Panel>
        );
    }
}

Edit.contextType = UserContext;

export default withToast(Edit);
