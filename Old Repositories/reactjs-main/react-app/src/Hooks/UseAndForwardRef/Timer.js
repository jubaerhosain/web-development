import { useEffect, useRef, useState } from "react";

export default function Time() {
    const [date, setDate] = useState(new Date());

    // as storage
    const buttonRef = useRef();
    console.log(buttonRef);

    const tick = () => {
        console.log("tick");
        setDate(new Date());
    };

    useEffect(() => {
        // ref.current not changes on state change
        // ref.current change holew re-render hobena
        buttonRef.current = setInterval(tick, 1000);

        // do the cleanup - stop the timer
        return () => {
            clearInterval(buttonRef.current);
        };
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={() => clearInterval(buttonRef.current)}>
                    Cleanup
                </button>
            </p>
        </div>
    );
}
