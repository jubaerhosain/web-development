import Clock from "./Clock";

export default function ClockList({ quantities = [] }) {
    return (
        <>
            <div>
                {quantities.map((key) => (
                    <Clock key={key} />
                ))}
                {quantities.map((key) => (
                    <Clock key={Math.random()} />
                ))}
            </div>
        </>
    );
}
