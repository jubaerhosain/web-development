import { useCallback, useMemo, useState } from "react";
import Title from "./Hooks/CallbackAndMemo/Title";
import Button from "./Hooks/CallbackAndMemo/Button";
import ShowCount from "./Hooks/CallbackAndMemo/ShowCount";

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // remember returned function reference
    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);
    
    // remember returned function reference
    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    // remember return value
    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1; // costly operation
        return count1 % 2 === 0;
    }, [count1]);

    // React.memo(component), memoized the component

    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
}

export default App;
