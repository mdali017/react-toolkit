import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/CounterSlice";

const Counter = () => {
  //   const count = useSelector((state) => state.counter.count);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  //   console.log(count);
  return (
    <div>
      {/* <button onClick={() => dispatch(increment())}>Increment</button> */}
      <button onClick={() => dispatch(incrementByValue(5))}>
        IncrementByValue(5)
      </button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
