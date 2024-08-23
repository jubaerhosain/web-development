import Call from "./Call";

function CallList({ quantities }) {
    return (
        <>
            <div>
                {quantities.map((key) => (
                    <Call key={key}/>
                ))}
            </div>
            <div>
                {quantities.map((key) => (
                    <Call key={key}/>
                ))}
            </div>
        </>
    );
}

export default CallList;
