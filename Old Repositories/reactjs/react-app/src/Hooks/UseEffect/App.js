import { useState } from "react";
import TimerF from "./Hooks/UseEffect/TimerF";

function App() {
    const [show, setShow] = useState(true);

    return (
        <div className="app">
            <div>{show && <TimerF />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? "Hide post" : "Show post"}
                </button>
            </p>
        </div>
    );
}

export default App;
