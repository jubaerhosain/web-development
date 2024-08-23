import React from "react";

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function Input({ type, placeholder }, inputRef) {
    return <input ref={inputRef} type={type} placeholder={placeholder} />;
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
