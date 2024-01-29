import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    function addFive() {
        let i = 0;
        while(i < 5) {
            // wrong
            setCount(count+1);
            i++;
        }
    }

    function addFour() {
        let i = 0;
        while(i < 4) {
            // recommended
            setCount((prevCount) => prevCount+1);
            i++;
        }
    }

    return (
        <>
            {count}
            <br/>
            <button onClick={addFive}>Add 5</button>
            <button onClick={addFour}>Add 4</button>
        </>
    );
}
