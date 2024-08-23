import React from "react";
import ReactDOM from "react-dom";

// functional component=====================================================
/*
function Clock({ locale }) {
    return (
        <h1 className="heading">
            <span>Time: {new Date().toLocaleTimeString(locale)}</span>
        </h1>
    );
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));
*/

// class-full component state maintain korte pare
// props=========================================================
class Call extends React.Component {
    render() {
        // never assign/change any props here
        // bcz props change hole re-render hoy
        console.log(this.props.children + "?");
        return (
            <h1 className="heading">
                <p>{this.props.children}</p>
                <span>Time: {new Date().toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

// const call = new Call();
// ReactDOM.render(call.print(), document.getElementById("root"));

// internally react er ekta object create hocche
ReactDOM.render(<Call locale="bn-BD">test</Call>, document.getElementById("root"));
