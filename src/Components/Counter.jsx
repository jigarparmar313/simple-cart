import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseBy1,
  decreaseBy1,
  increaseBy10,
  decreaseBy10,
} from "../Redux/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatach = useDispatch();

  return (
    <>
      <h1 className="text-center">
        {counter}
      </h1>
<div className="text-center">

        <button onClick={()=> dispatach(increaseBy1())} className="btn btn-secondary">IncreaseBy1</button>
        <button onClick={()=> dispatach(increaseBy10())} className="btn btn-secondary">IncreaseBy10</button>
        <button onClick={()=> dispatach(decreaseBy1())} className="btn btn-secondary">decreaseBy1</button>
        <button onClick={()=> dispatach(decreaseBy10())} className="btn btn-secondary">decreaseBy10</button>
</div>
    </>
  );
};

export default Counter;
