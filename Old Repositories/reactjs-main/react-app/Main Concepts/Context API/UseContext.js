import React from "react";
import ThemeContext from "./ThemeContext";
import { useContext } from "react"; // hook

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
