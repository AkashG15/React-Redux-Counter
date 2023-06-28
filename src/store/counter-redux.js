import { createStore } from "redux";
import { COUNTERDECREMENT, COUNTERDECREMENTDYNAMIC, COUNTERINCREMENT, COUNTERINCREMENTDYNAMIC } from "./redux-constant";


const initialState={
    counter:0,
    status:"dafault"
}
const reduFun = (state= initialState, action) => {
  switch (action.type) {
    case COUNTERINCREMENT:
      return {
        ...state,
        counter: parseFloat(state.counter) + 1,
        status:action.type
      };

    case COUNTERDECREMENT:
      return {
        ...state,
        counter: parseFloat(state.counter) - 1,
        status:action.type
      };
      case COUNTERINCREMENTDYNAMIC:
      return {
        ...state,
        counter: parseFloat(state.counter) + parseFloat(action.value), 
        status:action.type
      };
      case COUNTERDECREMENTDYNAMIC:
      return {
        ...state,
        counter: parseFloat(state.counter) - parseFloat(action.value),
        status:action.type
      };


    default:
      return state;
  }
};
const counterStore = createStore(reduFun);

export default counterStore;