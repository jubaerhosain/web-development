import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("h1", { className: "heading" }, "Header 1");

console.log(element);

setInterval(() => {
    const element1 = (
        <h1 className="heading">
            <span>Time: {new Date().toLocaleTimeString()}</span>
        </h1>
    );
    ReactDOM.render(element1, document.getElementById("root"));
}, 1000);
