// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterStore from "../store/counter-redux";
import { COUNTERDECREMENT, COUNTERINCREMENT } from "../store/redux-constant";
import "./Counter.css";
const Counter = () => {
  // const [currentValue, setCurrentValue] = useState(0);

  const dispatchVar = useDispatch();
  const currentCounterState = useSelector((counterStore) => {
    return counterStore;
  });
  console.log("currentCounterState", currentCounterState);
  const { counter, status } = currentCounterState;
  // console.log("counter",counter);

  const incrementCounter = () => {
    dispatchVar({ type: COUNTERINCREMENT});
  };
  const decrementCounter = () => {
    dispatchVar({ type: COUNTERDECREMENT});
  };

  
  const counterClass =
    status === COUNTERINCREMENT
      ? "increment"
      : status === COUNTERDECREMENT
      ? "decrement"
      : "default";
  return (
    <div>
      <h1>counter example using React Redux </h1>
      <div>
        <span className={counterClass}>counter:{counter}</span>
        <div>
          <button onClick={incrementCounter}>
            Increment
          </button>
          <button onClick={decrementCounter}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
