import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image,
} from 'react-bootstrap';
import withToast from './withToast.jsx';
import UserContext from './UserContext.js';
import Item from "./Item.jsx";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0
        }
    }

    render() {
        const { id } = this.state;
        const { match: { params: { id: propsId } } } = this.props;
        if (id == null) {
            if (propsId != null) {
                return <h3>{`User with ID ${id} not found.`}</h3>;
            }
            return null;
        }

        return (
            <div className="Profile">
                <div className="ProfileBanner">
                    <figure>
                        <img src="../static/images/text.jpg" alt="img01"/>
                    </figure>
                </div>
                <div className="ProfileWrap">
                    <div className="ProfileSidebar">
                        <div className="AvatarContainer">
                            <Image src="../static/images/3.jpg" alt="profile pic" circle/>
                        </div>
                        <p>User ID: {propsId}</p>
                    </div>
                </div>
            </div>

            // <Panel>
            //     <Panel.Heading>
            //         <Panel.Title>{`Viewing User: ${propsId}`}</Panel.Title>
            //     </Panel.Heading>
            //     <Panel.Body>
            //         <div>Information of the user</div>
            //         <figure>
            //             <img src="../static/images/text.jpg" alt="img01"/>
            //             <figcaption>
            //                 <p>Post Title</p>
            //                 <a href="http://localhost:8000/post/1" data-toggle="modal" data-target="#theModal">View more</a>
            //             </figcaption>
            //         </figure>
            //     </Panel.Body>
            //     <Panel.Footer>
            //         <div>This is a footer</div>
            //     </Panel.Footer>
            // </Panel>
        );
    }
}

const UserWithToast = withToast(withRouter(User));

export default UserWithToast;
