import React from "react";

class ClickEvent extends React.Component {
    handleClick = (e) => {
        console.log(e);
        console.log("Button clicked!");
    };

    render() {
        return <button onClick={this.handleClick}>Click me</button>;
    }
}

export default ClickEvent;
