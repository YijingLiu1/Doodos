import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image,
} from 'react-bootstrap';
import withToast from './withToast.jsx';
import EventTabContents from "./EventTabContents.jsx";

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0
        }
    }

    render() {
        // id is for server render matching, not used at the moment
        const { id } = this.state;
        const { match: { params: { id: propsId, tab } } } = this.props;
        if (id == null) {
            if (propsId != null) {
                return <h3>{`User with ID ${id} not found.`}</h3>;
            }
            return null;
        }

        return (
            <div>
                <div className="EventSlides">
                    <figure className="effect-marley">
                        <img src="/static/images/2.jpg" alt="img01"/>
                    </figure>
                </div>
                <div className="EventWrap">
                    <div className="EventSidebar">
                        <div className="AvatarContainer">
                            <Image src="/static/images/3.jpg" alt="profile pic" circle/>
                        </div>
                        <h3>Event Title</h3>
                        <p>Time</p>
                        <p>Location</p>
                        <Button bsStyle="primary">Join +</Button>
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
                            <EventTabContents tab={tab} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const EventWithToast = withToast(withRouter(Event));

export default EventWithToast;
