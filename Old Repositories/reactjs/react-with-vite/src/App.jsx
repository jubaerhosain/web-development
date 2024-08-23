// import Login from "./components/Login";
// import ReactRouter from "./components/ReactRouter/ReactRouter";
import PrivateRoute from "./components/ReactRouter/PrivateRouting/PrivateRoute";
import { BrowserRouter } from "react-router-dom";

import React, { useState } from "react";

// Custom hook
function useSharedState() {
  const [count, setCount] = useState(0);

  console.log("share data called");

  const increment = () => {
    setCount(count + 1);
  };

  return [count, increment];
}

// Component A
function ComponentA() {
  const [count, increment] = useSharedState();
  const [ count1, increment1 ] = useSharedState();

  return (
    <div>
      <p>Count in Component A: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Count in Component A: {count1}</p>
      <button onClick={increment1}>Increment</button>
    </div>
  );
}

// Component B
function ComponentB() {
  const { count, increment } = useSharedState();

  return (
    <div>
      <p>Count in Component B: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default App;
