import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    // eslint-disable-next-line react/prop-types
    const { change: currentChange, locale: currentLocale } = this.props;
    // eslint-disable-next-line react/prop-types
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange === nextChange && nextLocale === currentLocale) {
      return false;
    }
    return true;
  }

  render() {
    console.log("button component rendered");
    // eslint-disable-next-line react/prop-types
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        Click here
      </button>
    );
  }
}

export default Button;
