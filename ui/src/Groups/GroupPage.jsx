import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image, Glyphicon, Thumbnail,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';

class GroupPage extends React.Component {
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
                <div className="GroupTitle">
                    <div
                        align="left"
                        style={{float: 'left',
                            fontSize: '25px',
                            marginLeft: '15px'}}>
                        <a href="/user/1/">Group Name</a>
                    </div>
                    <div align="right" style={{marginRight: '15px'}}>
                        <Button bsStyle="primary">+ Join</Button>
                    </div>
                </div>
                <div className="GroupWrap">
                    <div className="GroupContents">
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
                        </div>
                    </div>
                    <div className="GroupSidebar">
                        <h3>About</h3>
                        <p> This is introduction of some Groups. And it goes on and
                            on and on and on and on and on and on and on and on and
                            on and on and on and on and on and on and on and on and
                            on and on and on and on and on and on and on and on...</p>
                        <p>Location</p>
                        <p>Privacy</p>
                    </div>
                </div>
            </div>
        );
    }
}

const EventWithToast = withToast(withRouter(Event));

export default GroupPage;
