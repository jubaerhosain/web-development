import { useEffect, useState } from "react";

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log(`clock ticking!`);
        setDate(new Date());
    };

    // depends on count
    useEffect(() => {
        console.log("updating document title");
        document.title = `Clicked ${count} times`;
    }, [count]);

    // depends on nothing
    useEffect(() => {
        console.log("starting timer");
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        // calls when unmounting this component
        return () => {
            console.log("component unmounted");
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
