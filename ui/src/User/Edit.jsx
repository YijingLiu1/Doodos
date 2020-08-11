import React from 'react';
import { Link } from 'react-router-dom';
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
        const issue = store.initialData ? store.initialData.issue : null;
        delete store.initialData;
        this.state = {
            post: null,
            userVerified: false,
            loading: true,
            invalidFields: {},
            showingValidation: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValidityChange = this.onValidityChange.bind(this);
        this.showValidation = this.showValidation.bind(this);
        this.dismissValidation = this.dismissValidation.bind(this);
    }

    componentDidMount() {
        const { post } = this.state;
        if (post == null) this.loadData();
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id: prevId } } } = prevProps;
        const { match: { params: { id } } } = this.props;
        if (prevId !== id) {
            this.loadData();
        }
    }

    // for dates check only
    onValidityChange(event, valid) {
        const { name } = event.target;
        this.setState((prevState) => {
            const invalidFields = { ...prevState.invalidFields, [name]: !valid };
            if (valid) delete invalidFields[name];
            return { invalidFields };
        });
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

    showValidation() {
        this.setState({ showingValidation: true });
    }

    dismissValidation() {
        this.setState({ showingValidation: false });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.showValidation();
        const { issue, invalidFields } = this.state;
        if (Object.keys(invalidFields).length !== 0) return;

        const query = `mutation issueUpdate(
      $id: Int!,
      $changes: IssueUpdateInputs!
      ) {
        issueUpdate(
          id: $id, 
          changes: $changes
        ) {
          id title status owner
          effort created due description
        }
      }`;
        // issue takes from this.state,
        // therefore all left fields other than id and created would go into changes
        const { id, created, ...changes } = issue;
        const { showSuccess, showError } = this.props;
        const data = await graphQLFetch(query, { id, changes }, showError);
        // the data object here would contain 2 objects,
        // one is what we need here -- issueUpdate,
        // another one is __proto__, which is why we need
        // to use data.issueUpdate instead of data
        if (data) {
            this.setState({ issue: data.issueUpdate });
            showSuccess('Updated issue successfully');
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
        const { post, userVerified, loading } = this.state;
        if (loading) return <div>loading...</div>;
        if (!loading && post == null) return <h3>Post not found by this id.</h3>;
        if (!loading && !userVerified) {
            return <h3>Not authorized for editing this post.</h3>
        }
        const postObject = {};
        for (let k in post) {
            postObject[k] = post[k];
        }
        const dateString = `${postObject.date}`;
        const date = new Date(dateString).toDateString();

        const { invalidFields, showingValidation } = this.state;
        let validationMessage;
        if (Object.keys(invalidFields).length !== 0 && showingValidation) {
            validationMessage = (
                <Alert bsStyle="danger" onDismiss={this.dismissValidation}>
                    Please correct invalid fields before submitting.
                </Alert>
            );
        }
        const user = this.context;

        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title>{`Editing post: ${postObject.title}`}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={3}>Created</Col>
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
                        <FormGroup>
                            <Col smOffset={3} sm={9}>{validationMessage}</Col>
                        </FormGroup>
                    </Form>
                </Panel.Body>
            </Panel>
        );
    }
}

Edit.contextType = UserContext;

export default withToast(Edit);
