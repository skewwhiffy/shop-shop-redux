import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slice/counter";

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
