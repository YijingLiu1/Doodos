import React from "react";
import api from "../api";

export default function EventTabContents({ tab, event }) {
    if (tab === "about") {
        return (
            <h3>Host by {event.host}</h3>
        )
    }
    else if (tab === "attenders") {

        return (
            <p>{event.registered}</p>
        )
    }
    else {
        return (
            <p>{event.description}</p>
        )
    }
}
