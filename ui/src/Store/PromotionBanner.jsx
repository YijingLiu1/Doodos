import React from "react";
import {Button} from "react-bootstrap";

export default class PromotionBanner extends React.Component{
    constructor() {
        super();
        this.state = { index: 0 };
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    prevPage() {
        const { index: prevIndex } = this.state;
        let event = document.getElementsByClassName("effect-marley");
        event[0].style.display = "none";
        this.setState({ index: (prevIndex + 2) % 3});
        setTimeout(function() {
            event[0].style.display = "block";
        }, 10);
    }

    nextPage() {
        const { index: prevIndex } = this.state;
        let event = document.getElementsByClassName("effect-marley");
        event[0].style.display = "none";
        this.setState({ index: (prevIndex + 1) % 3});
        setTimeout(function() {
            event[0].style.display = "block";
        }, 10);
    }

    render() {
        const { index } = this.state;
        let pic = `/static/images/${index+1}.jpg`;
        const description = ["$XX",
            "$XXX", "$X"];
        return (
            <figure className="effect-marley">
                <img src={pic} alt="img01"/>
                <figcaption>
                    <h2>Promotion for Item {index + 1}</h2>
                    <a className="switch" onClick={this.prevPage}>&#10094;</a>
                    <a className="switch next" onClick={this.nextPage}>&#10095;</a>
                    <p>
                        {description[index]}<br />
                        <Button href="/event/1/">View more</Button>
                    </p>
                </figcaption>
            </figure>
        );
    }
}
