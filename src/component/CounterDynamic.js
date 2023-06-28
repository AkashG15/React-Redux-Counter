import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import counterStore from "../store/counter-redux";
import { COUNTERDECREMENTDYNAMIC, COUNTERINCREMENTDYNAMIC } from "../store/redux-constant";
import "./Counter.css";

const CounterDynamic =()=>{
//   const [currentValue, setCurrentValue] = useState(0);

  const dispatchVar = useDispatch();
  const currentCounterState = useSelector((counterStore) => {
    return counterStore;
  });
  console.log("currentCounterState", currentCounterState);
  const { counter, status } = currentCounterState;
//   console.log("counter",counter);

  const incrementCounterDynamic = () => {
    dispatchVar({ type: COUNTERINCREMENTDYNAMIC,value: inputValue });
  };
  const decrementCounterDynamic = () => {
    dispatchVar({ type: COUNTERDECREMENTDYNAMIC,value: inputValue });
  };
  const [inputValue,setInputValue] = useState(0);
  const counterClass =
    status === COUNTERINCREMENTDYNAMIC
      ? "increment"
      : status === COUNTERDECREMENTDYNAMIC
      ? "decrement"
      : "default";
  return (
    <div>
      <h1>counter example using React Redux </h1>
      <div>
        <span className={counterClass}>counter:{counter}</span>

        <input value={inputValue} type="number" onChange={(e)=>setInputValue(e.target.value)}/>
        <div>
          <button onClick={incrementCounterDynamic}>
            Dynamic-Increment
          </button>
          <button onClick={decrementCounterDynamic}>
            Dynamic-Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterDynamic;