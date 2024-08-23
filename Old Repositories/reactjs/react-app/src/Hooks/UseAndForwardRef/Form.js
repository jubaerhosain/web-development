import { useEffect, useRef } from "react";
import Input from "./Input";

export default function Form() {
    const inputRef = useRef(null);
    const inputRefComponent = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef);
        console.log(inputRefComponent);
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="enter something" />
            <br />
            <Input ref={inputRefComponent} type="text" placeholder="enter something" />
        </div>
    );
}
