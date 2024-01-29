import React from "react";
import ThemeContext from "./ThemeContext";
import { useContext } from "react"; // hook

/*
export default function Content() {
    console.log("Content Rendered");
    return (
        <ThemeContext.Consumer>
            {({ theme, changeBackground }) => (
                <h1 onClick={changeBackground} style={{ backgroundColor: theme, color: "white" }}>
                    This is {theme} Content
                </h1>
            )}
        </ThemeContext.Consumer>
    );
}
*/

/*
export default class Content extends React.Component {
    // componentDidMount() {
    //     console.log(this.context);
    // }

    print() {
        return <h2> This is heading 2</h2>;
    }

    render() {
        console.log("Content Rendered");
        const { theme, changeBackground } = this.context;
        // console.log(theme, changeBackground);
        return (
            <div>
                <h1 onClick={changeBackground} style={{ backgroundColor: theme, color: "white" }}>
                    This is {theme} Content
                </h1>
            </div>
        );
    }
}

// access with this.context
// static property of Context class
Content.contextType = ThemeContext;
*/

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, changeBackground } = context;

    console.log("Content Rendered");
    return (
        <h1 onClick={changeBackground} style={{ backgroundColor: theme, color: "white" }}>
            This is {theme} Content
        </h1>
    );
}
