import { useState } from "react";

function Todo() {
    const [input, setInput] = useState("");
    const [warning, setWarning] = useState("");

    const handleInput = (event) => {
        let inputText = event.target.value;
        let warningText = inputText.includes(".js") ? "Learn JavaScript first" : "Ok";

        setInput(inputText);
        setWarning(warningText);
    };

    return (
        <>
            <p>{input}</p>
            <div>
                <input type="text" value={input} onChange={handleInput} />
            </div>
            <h2>{warning}</h2>
        </>
    );
}

export default Todo;
