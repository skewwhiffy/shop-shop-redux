// TODO: Remove this eventually
import React from "react";
import { useSelector } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.counter.value)

  return (
    <div>
      <h1>
        Counter value: <span>{count}</span>
      </h1>
    </div>
  );
}

export default Counter
