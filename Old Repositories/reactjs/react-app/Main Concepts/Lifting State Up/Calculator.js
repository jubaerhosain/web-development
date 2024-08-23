import React from "react";
import Boiling from "./Boiling";
import TemperatureInput from "./TemperatureInput";
import { convert, cToF, fToC } from "../lib/Converter";

// calculator handling states
// unidirectional top-down approach
// single source of truth

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "",
            scale: "c",
        };
    }

    onTemperatureChange = (event, scale) => {
        this.setState({
            temperature: event.target.value,
            scale,
        });
    };

    render() {
        console.log("Calculator rendered");
        const { temperature, scale } = { ...this.state };
        const celsius = scale === "f" ? convert(temperature, fToC) : temperature.toString();
        const fahrenheit = scale === "c" ? convert(temperature, cToF) : temperature.toString();
        // console.log(celsius, fahrenheit);
        return (
            <>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.onTemperatureChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.onTemperatureChange} />
                <Boiling celsius={Number(celsius)} />
            </>
        );
    }
}
