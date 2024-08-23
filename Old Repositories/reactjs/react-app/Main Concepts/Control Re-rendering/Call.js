import React from "react";
import Button from "./Button";

class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: "bn-BD",
        };
    }

    // method of Call class
    updateTime() {
        this.setState({ date: new Date() });
    }

    // runs after components has been rendered to the real DOM
    componentDidMount() {
        this.clockTimer = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    clickHandle = (locale) => {
        this.setState({ locale });
    };

    render() {
        console.log("Call rendered");
        return (
            <div>
                <h1 className="heading">
                    <p>{this.props.children}</p>
                    <span>Time: {this.state.date.toLocaleTimeString(this.state.locale)}</span>
                </h1>
                <Button changeLocal={this.clickHandle} locale="en-US"></Button>
            </div>
        );
    }
}

export default Call;
