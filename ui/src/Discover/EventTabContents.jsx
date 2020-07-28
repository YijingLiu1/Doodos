import React from "react";

export default function EventTabContents({ tab }) {
    if (tab === "about") {
        return (
            <h3>This is a placeholder for about</h3>
        )
    }
    else if (tab === "attenders") {
        return (
            <h3>This is a placeholder for attenders</h3>
        )
    }
    else {
        return (
            <h3>This is a placeholder for description</h3>
        )
    }
}
