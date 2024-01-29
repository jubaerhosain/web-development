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
        console.log(locale);
        this.setState({ locale });
    };

    render() {
        console.log("Call rendered");
        /*
        let button;
        if (this.state.locale === "bn-BD") {
            button = <Button changeLocal={this.clickHandle} locale="en-US"></Button>;
        } else {
            button = <Button changeLocal={this.clickHandle} locale="bn-BD"></Button>;
        }
        // console.log(button);
        */
        const { date, locale } = { ...this.state };

        return (
            <div>
                <h1 className="heading">
                    <span>Time: {date.toLocaleTimeString(locale)}</span>
                </h1>
                {/*{button}*/}
                {locale === "bn-BD" ? (
                    <Button changeLocal={this.clickHandle} locale="en-US" show={true} enable={false} />
                ) : (
                    <Button changeLocal={this.clickHandle} locale="bn-BD" show={false} enable={true} />
                )}
            </div>
        );
    }
}

export default Call;
