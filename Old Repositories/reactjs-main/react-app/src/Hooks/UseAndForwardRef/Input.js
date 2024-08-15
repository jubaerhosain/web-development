import React from "react";

function Input({ type, placeholder }, inputRefComponent) {
    return <input ref={inputRefComponent} type={type} placeholder={placeholder} />;
}

export default React.forwardRef(Input);