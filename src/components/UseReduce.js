/* useReducer is a Hook in React that is used for more complex state logic where the next state depends on the previous one and requires additional logic. It is often preferable to useState when dealing with state objects that have a complex structure or when updates are based on the previous state.

The useReducer hook takes two arguments: a reducer function and an initial state. It returns an array with two elements: the current state and a dispatch function. The dispatch function is used to trigger state transitions based on actions defined in the reduce*/
import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Component using useReducer
function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseReducer;
