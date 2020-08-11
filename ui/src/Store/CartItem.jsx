import React from "react";
import {Link} from "react-router-dom";
import {Button, Glyphicon, Image} from "react-bootstrap";

export default class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;

        // Have to convert the object before use
        const itemObject = {};
        for (let k in item) {
            itemObject[k] = item[k];
        }
        const link = `/item/${itemObject._id}/`;

        return (
            <div  className="UserItem">
                <div align="left" style={{float: 'left'}}>
                    <div className="MiniAvatarContainer">
                        <Image className="img-circle" src={itemObject.imagePath} alt="profile pic" circle/>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    {itemObject.itemName}
                </div>
                <div align="right">
                    {itemObject.quantity}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button bsSize="small" bsStyle="warning"><Glyphicon glyph="trash" /></Button>
                </div>
            </div>
        );
    }
}
