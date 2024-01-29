import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};

export default function TemperatureInput(props) {
    const { temperature, scale, onTemperatureChange } = { ...props };
    console.log(`TemperatureInput ${scaleNames[scale]} rendered`);
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input type="text" value={temperature} onChange={(event) => onTemperatureChange(event, scale)} />
        </fieldset>
    );
}
