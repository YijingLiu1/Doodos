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
            number: 1
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.increaseItem = this.increaseItem.bind(this);
        this.decreaseItem = this.decreaseItem.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    showModal() {
        this.setState({ showing: true });
    }

    hideModal() {
        this.setState({ showing: false });
    }

    increaseItem() {
        const { number } = this.state;
        if (number < 30) {
            this.setState({ number: number + 1 });
        }
    }

    decreaseItem() {
        const { number } = this.state;
        if (number > 1) {
            this.setState({ number: number - 1 });
        }
    }

    format(num) {
        return num != null ? num.toString() : '';
    }

    unformat(str) {
        const val = parseInt(str, 10);
        return Number.isNaN(val) ? null : val;
    }

    onChange(e) {
        if (e.target.value.match(/^\d*$/)) {
            const number = e.target.value;
            if (number > 0 && number < 31) {
                this.setState({ number: e.target.value });
            } else if (number > 30) {
                this.setState({ number: 30 });
            } else {
                this.setState({ number: 1 });
            }
        }
    }

    onBlur(event) {
        const { number } = this.state;
        const { value: textValue } = event.target;
        const naturalValue = unformat(number);
        const value = naturalValue === undefined ? textValue : naturalValue;
        this.setState({ number: value });
    }

    render() {
        const { showing, number } = this.state;
        const { product } = this.props;
        // Have to convert the object before use
        const productObject = {};
        for (let k in product) {
            productObject[k] = product[k];
        }
        const link = `/item/${productObject._id}/`;
        console.log(number);
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
                            <Button bsSize="xsmall" onClick={this.decreaseItem}><Glyphicon glyph="minus" /></Button>
                            <FormGroup bsSize="sm">
                                <input
                                    type="text"
                                    style={{width: "50px", height: "25px"}}
                                    value={number}
                                    name="number"
                                    onChange={this.onChange}
                                    onBlur={this.onBlur}
                                />
                            </FormGroup>
                            <Button bsSize="xsmall" onClick={this.increaseItem}><Glyphicon glyph="plus" /></Button>
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
