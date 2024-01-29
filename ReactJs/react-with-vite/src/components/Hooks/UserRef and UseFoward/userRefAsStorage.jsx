import { useEffect, useRef, useState } from "react";

export default function Time() {
    const [date, setDate] = useState(new Date());
    const timerRef = useRef();

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        timerRef.current = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={() => clearInterval(timerRef.current)}>
                    Cleanup
                </button>
            </p>
        </div>
    );
}
