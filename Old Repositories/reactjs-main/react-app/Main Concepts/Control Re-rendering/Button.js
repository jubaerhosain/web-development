import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { changeLocal: current } = { ...this.props };
        const { changeLocal: next } = { ...nextProps };

        // console.log(this.props, nextProps);

        return current === next ? false : true;
    }

    render() {
        console.log("Button rendered");
        const { changeLocal, locale } = { ...this.props };
        return (
            <button type="button" onClick={() => changeLocal(locale)}>
                Click Here
            </button>
        );
    }
}

export default Button;
