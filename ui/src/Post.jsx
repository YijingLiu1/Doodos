import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image,
} from 'react-bootstrap';
import withToast from './withToast.jsx';
import UserContext from './UserContext.js';
import Item from "./PostItem.jsx";
import UserTabContents from "./UserTabContents.jsx";

class Post extends React.Component {
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
                <div>
                    <div className="PostBar">
                        <h3>Post Title</h3>
                        <p>Description</p>
                        <p>Time</p>
                        <p>Location</p>
                        <p>Comments</p>                    </div>
                </div>
            </div>
        );
    }
}

const PostWithToast = withToast(withRouter(Post));

export default PostWithToast;

