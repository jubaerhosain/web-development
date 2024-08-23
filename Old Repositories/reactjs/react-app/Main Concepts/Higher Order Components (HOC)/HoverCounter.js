import React from "react";
import withCounter from "./HOC/withCounter";

function ClickCounter(props) {
    const { count, incrementCounter } = props;
    return (
        <div>
            <h1 type="button" onMouseOver={incrementCounter}>
                Hovered {count} Times
            </h1>
        </div>
    );
}

export default withCounter(ClickCounter);
