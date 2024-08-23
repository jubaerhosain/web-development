let componentHooks = [];
let currentHookIndex = 0;

// How useState works inside React (simplified).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    console.log(pair);
    // This is not the first render,
    // so the state pair already exists.
    // Return it and prepare for next Hook call.
    currentHookIndex++;
    return pair;
  }

  // This is the first time we're rendering,
  // so create a state pair and store it.
  pair = [initialState, setState];

  function setState(nextState) {
    // When the user requests a state change,
    // put the new value into the pair.
    pair[0] = nextState;
    // updateDom();
  }

  // Store the pair for future renders
  // and prepare for the next Hook call.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}


function parentFunction() {
  let i = [4];

  function closureFunction(newValue) {
    i[0] = newValue;
  }

  return [i, closureFunction];
}

var [i, setI] = parentFunction();
console.log(i);
setI(44432);
console.log(i);
setI(432);
console.log(i);
setI(42);
console.log(i);
setI(43);
console.log(i);
