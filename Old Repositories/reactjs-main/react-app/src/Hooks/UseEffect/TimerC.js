import React from "react";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date(),
        };
    }

    tick = () => {
        console.log("tick");
        this.setState({ date: new Date() });
    };

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} Times`;
        // this.interval becomes property of class
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        console.log("state updated");
        const { count } = this.state;
        document.title = `Clicked ${count} Times`;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    increment = () => {
        console.log("clicked");
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <button onClick={this.increment}>Click Here</button>
            </div>
        );
    }
}
