import React from "react";
import Section from "./Context API/Section";
import ThemeContext from "./Context API/ThemeContext";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "black",
            changeBackground: this.changeBackground,
        };
    }

    changeBackground = () => {
        const theme = this.state.theme === "black" ? "green" : "black";
        this.setState({ theme: theme });
    };

    render() {
        console.log("App Rendered");
        // value hisebe state patano uchit
        // otherwise value change na hoilew prottek bar notun ekta object reference jabe
        return (
            <div className="app">
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
