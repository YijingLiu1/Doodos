import React from "react";
import {Button} from "react-bootstrap";

export default class EventItem extends React.Component{
    constructor() {
        super();
        this.state = { index: 0 };
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    prevPage() {
        const { index: prevIndex } = this.state;
        this.setState({ index: (prevIndex + 2) % 3});
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
        const description = ["Event 1 description",
            "Event 2 description", "Event 3 description"];
        return (
            <figure className="effect-marley">
                <img src={pic} alt="img01"/>
                <figcaption>
                    <h2>Event <span>{index + 1}</span></h2>
                    <a className="switch" onClick={this.prevPage}>&#10094;</a>
                    <a className="switch next" onClick={this.nextPage}>&#10095;</a>
                    <p>
                        {description[index]}<br />
                        <Button href="http://localhost:8000/event/1">View more</Button>
                    </p>
                </figcaption>
            </figure>
        );
    }
}
