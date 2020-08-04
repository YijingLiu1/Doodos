import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Col, Panel, Form, FormGroup, FormControl, ControlLabel,
    ButtonToolbar, Button, Alert, Row, Image, Grid,
} from 'react-bootstrap';
import withToast from '../withToast.jsx';
import GroupItem from "./GroupItem.jsx";

class Dashboard extends React.Component {
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
                <GroupItem />
                <GroupItem />
                <GroupItem />
            </div>
        );
    }
}

const DashboardWithToast = withToast(withRouter(Dashboard));

export default DashboardWithToast;
