import React from "react";
import withCounter from "./HOC/withCounter";

function ClickCounter(props) {
    const { count, incrementCounter } = props;
    return (
        <div>
            <button type="button" onClick={incrementCounter}>
                Clicked {count} Times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);
