import React from "react";
import ThemeContext from "./ThemeContext";
import Section from "./Section";

export default class ContextAPI extends React.Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: "light",
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === "dark") {
                    return {
                        theme: "light",
                    };
                }
                return {
                    theme: "dark",
                };
            });
        },
    };

    render() {
        return (
            <div className="app">
                <ThemeContext.Provider value={this.state}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}
