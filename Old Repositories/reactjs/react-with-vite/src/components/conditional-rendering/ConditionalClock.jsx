import React from "react";
import Button from "./ConditionalButton";

class ConditionalClock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        // console.log(this.state);
        
        // toggle using state of locale
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* {locale === "bn-BD" ? (
                    <Button change={this.handleClick} locale="en-US" show={false} enable={false} />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" show enable />
                )} */}
                {locale === "bn-BD" ? (
                    <Button change={this.handleClick} locale="en-US" />
                ) : (
                    <Button change={this.handleClick} locale="bn-BD" />
                )}
            </div>
        );
    }
}

export default ConditionalClock;
