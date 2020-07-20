import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger, Col, Panel,
} from 'react-bootstrap';

import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';
import NotFound from "./NotFound.jsx";


export default function Post() {
    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title>Title</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                Contents
            </Panel.Body>
            <Panel.Footer>
                Comments
            </Panel.Footer>
        </Panel>
    )
}
