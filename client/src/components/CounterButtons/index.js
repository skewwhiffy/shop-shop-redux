import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../utils/counterSlice";

function CounterButtons() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Example redux element</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default CounterButtons;
