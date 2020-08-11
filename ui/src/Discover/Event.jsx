import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';
import EventTabContents from "./EventTabContents.jsx";
import api from "../api";
import axios from "axios";

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            event: null,
        }
    }

    componentDidMount() {
        const { post } = this.state;
        if (post == null) this.loadData();
    }

    async loadData() {
        const { match: { params: { id } } } = this.props;
        const event = await api.get(`/events/${id}`);
        if (event) {
            this.setState({ event: event.data });
        }
    }

    async joinEvent() {
        const { user, id, showError } = this.props;
        if (user != null) {
            try {
                const api = axios.create({
                    baseURL: '/api',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': localStorage.token
                    }
                });
                await api.put(`/posts/like/${id}`);
                this.loadData();
            } catch (err) {
                console.error(err.message);
            }
            this.setState({ liked: true});
        } else {
            showError("Must sign in to like posts.");
        }
    }

    render() {
        const { match: { params: { id, tab } } } = this.props;
        // Have to convert the object before use
        const { event } = this.state;
        const eventObject = {};
        for (let k in event) {
            eventObject[k] = event[k];
        }
        const dateString = `${eventObject.modifiedOn}`;
        const date = new Date(dateString).toDateString();
        return (
            <div>
                <div className="EventSlides">
                    <figure className="effect-marley">
                        <img src={eventObject.imagePath} alt="img01"/>
                    </figure>
                </div>
                <div className="EventWrap">
                    <div className="EventSidebar">
                        <div className="AvatarContainer">
                            <Image src="/static/images/3.jpg" alt="profile pic" circle/>
                        </div>
                        <h3>{eventObject.name}</h3>
                        <p>{date.substr(4)}</p>
                        <p>{eventObject.street}</p>
                        <p>{eventObject.City} {eventObject.state} {eventObject.postCode}</p>
                        <Button bsStyle="primary" onClick={this.joinEvent}>Join +</Button>
                    </div>
                    <div className="EventContents">
                        <ul className="EventTabs">
                            <li className="tab">
                                <Link to="./description">Description</Link>
                            </li>
                            <li className="tab">
                                <Link to="./attenders">Attenders</Link>
                            </li>
                            <li className="tab">
                                <Link to="./about">About</Link>
                            </li>
                        </ul>
                        <div className="ProfileTabContents">
                            <EventTabContents tab={tab} event={eventObject} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const EventWithToast = withToast(withRouter(Event));

export default EventWithToast;
