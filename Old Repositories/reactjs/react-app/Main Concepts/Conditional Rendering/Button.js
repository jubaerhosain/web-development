import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { changeLocal: current, locale: currentL } = { ...this.props };
        const { changeLocal: next, locale: nextL } = { ...nextProps };

        // console.log(this.props, nextProps);
        // console.log(current === next);
        // console.log(currentL, nextL);

        // return current === next ? false : true;
        return current === next && currentL === nextL ? false : true;
    }

    render() {
        console.log("Button rendered");
        const { changeLocal, locale, show } = { ...this.props };
        // null return korlew lifecycle tik e thakbe, means shouldComponentUpdate call hobei
        /* if (!enable) {
            return null;
        } */
        return (
            <>
                <button type="button" onClick={() => changeLocal(locale)}>
                    {locale === "bn-BD" ? "Change to Bengali" : "Change to English"}
                </button>
                {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;
