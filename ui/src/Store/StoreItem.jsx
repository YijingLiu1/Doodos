import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    NavItem, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel,
    Button, ButtonToolbar, Tooltip, OverlayTrigger, Col,
} from 'react-bootstrap';

import withToast from '../withToast.jsx';
import NotFound from "../NotFound.jsx";
import Item from "./ItemPage.jsx";
import NumInput from "../NumInput.jsx";

class StoreItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    render() {
        const { showing } = this.state;
        const { product } = this.props;
        // Have to convert the object before use
        const productObject = {};
        for (let k in product) {
            productObject[k] = product[k];
        }
        const link = `/item/${productObject._id}/`;
        return (
            <React.Fragment>
                <div className="grid">
                    <figure className="effect-sadie" onClick={this.showModal}>
                        <img src={product.imagePath} alt="img01"/>
                        <figcaption>
                            <p>{product.itemName}</p>
                            <a href={link} data-toggle="modal" data-target="#theModal">View more</a>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <div align="left" style={{float: 'left'}}>${product.price}</div>
                    <div align="right">
                        <Form inline>
                            <Button bsSize="xsmall"><Glyphicon glyph="minus" /></Button>
                            <FormGroup bsSize="sm">
                                <FormControl
                                    style={{width: "50px", height: "25px"}}
                                    componentClass={NumInput}
                                    name="number"
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button bsSize="xsmall"><Glyphicon glyph="plus" /></Button>
                            <Button bsSize="xsmall" bsStyle="primary">Add to Cart</Button>
                        </Form>
                    </div>
                </div>
                <p></p><p></p>
                <Modal keyboard show={showing} onHide={this.hideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Author</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Item id={productObject._id} />
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonToolbar style={{float: "right"}}>
                            <Button
                                type="button"
                                bsStyle="primary"
                            >
                                Like
                            </Button>
                            <Button bsStyle="link" onClick={this.hideModal}>Back</Button>
                        </ButtonToolbar>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withToast(withRouter(StoreItem));
