import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        });
    };

    /*
    render() {
        const { count } = this.state;
        const { renderProp } = this.props;
        // console.log(count, renderProp);
        return renderProp({count: count,  incrementCount: this.incrementCount});
    }
    */

    render() {
        const { count } = this.state;
        const { children } = this.props;
        // console.log(count, renderProp);
        return children({count: count,  incrementCount: this.incrementCount});
    }
}
