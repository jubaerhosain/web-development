import React from "react";

class Call extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    */

    // property of React.Component Class
    state = {
        date: new Date(),
    };

    // method of Call class
    updateTime() {
        // this.setState({ date: new Date() });
        this.setState((state, props) => {
            // state is previous state
            this.setState({ date: new Date() });
        });
    }

    // runs after components has been rendered to the real DOM
    componentDidMount() {
        this.clockTimer = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    render() {
        // never assign/change any props here
        return (
            <h1 className="heading">
                <p>{this.props.children}</p>
                <span>Time: {this.state.date.toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Call;
