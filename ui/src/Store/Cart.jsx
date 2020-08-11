import CartItem from "./CartItem.jsx";
import {Col, Panel, Row} from "react-bootstrap";
import React from "react";
import axios from "axios";

export default class PostPanel extends React.Component {
    constructor() {
        super();
        this.state = { cart: [], user: null };
    }

    componentDidMount() {
        const { user } = this.state;
        if (user == null) this.loadData();
    }

    async loadData() {
        if (localStorage.token) {
            const api = axios.create({
                baseURL: '/api',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.token
                }
            });
            const cart = await api.get('/cart/');
            if (cart) {
                this.setState({ cart: cart.data });
            }
            console.log(this.state.cart);
            const profile = await api.get('/profile/me');
            const profileObject = {};
            for (let k in profile.data) {
                profileObject[k] = profile.data[k];
            }
            this.setState({ user: profileObject.user._id });
        }
    }

    render() {
        const { cart, user } = this.state;
        if (!cart) {
            return <div>No items in cart.</div>;
        }
        // Have to convert the object before use
        const cartObject = [];
        for (let k in cart) {
            cartObject.push(cart[k]);
        }
        const cartItems = cartObject.map((item) => (
            <Col xs={12} sm={6} md={3} key={item._id}><CartItem id={item._id} user={user} /></Col>
        ));
        return (
                    <Row>
                        {cartItems}
                    </Row>
        );
    }
}
