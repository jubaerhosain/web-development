import HoverCounter from "./React Render Props/HoverCounter";
import ClickCounter from "./React Render Props/ClickCounter";
import Counter from "./React Render Props/Counter";

/*
function App() {
    return (
        <div className="app">
            <Counter
                renderProp={({ count, incrementCount }) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            />
            <Counter
                renderProp={({ count, incrementCount }) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            />
        </div>
    );
}
*/

function App() {
    return (
        <div className="app">
            <Counter>
                {({ count, incrementCount }) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
            <Counter>
                {({ count, incrementCount }) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
