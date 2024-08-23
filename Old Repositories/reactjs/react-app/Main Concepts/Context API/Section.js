import React from "react";
import Content from "./Content";

export default class Section extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // section render hobena but content render hobe
        // provider er value change hoile consumer er value change hobei
        return false;
    }

    render() {
        console.log("Section Rendered");
        return (
            <div>
                <h1>This is heading 1</h1>
                <Content />
            </div>
        );
    }
}
