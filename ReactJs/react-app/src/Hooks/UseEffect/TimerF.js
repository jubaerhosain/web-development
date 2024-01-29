import { useEffect, useState } from "react";

export default function TimerF() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log("tick");
        setDate(new Date());
    };

    const increment = () => {
        console.log("clicked");
        setCount((count) => count + 1);
    };

    // only calls if count changes
    useEffect(() => {
        console.log("Updating title");
        document.title = `Clicked ${count} Times`;
    }, [count]);

    // [] empty array implies calls only first time mount
    useEffect(() => {
        console.log("Timer started");
        const interval = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            console.log("Component unmounted");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button onClick={increment}>Click Here</button>
        </div>
    );
}
