import React, { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  return state.count;
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter">
      <div className="container">
        <h3>Counter using useReducer</h3>
        <div>
          <h1>{state.count}</h1>
          <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
          <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
