import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { NAME_SPACE as COUNT_NAME_SPACE, actions } from "./store/count";

function App() {

    const { count } = useSelector(state => state[COUNT_NAME_SPACE]);
    const dispatch = useDispatch();

    function handleIncrease() {
        dispatch(actions.increaseCount());
    }

    function handleDecrease() {
        dispatch(actions.decreaseCount());
    }


  return (
    <div className="App">
      <button onClick={handleDecrease} type="button">-</button>
      <span>{ count }</span>
      <button onClick={handleIncrease} type="button">+</button>
    </div>
  );
}

export default App;
