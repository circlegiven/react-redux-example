import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { NAME_SPACE as COUNT_NAME_SPACE, actions } from "./store/count";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import AuthRoute from "./AuthRoute";

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
      <BrowserRouter>
        <div className="App">
          <button onClick={handleDecrease} type="button">-</button>
          <span>{ count }</span>
          <button onClick={handleIncrease} type="button">+</button>
            <Link to={'/A'}>A</Link>
            <Link to={'/B'}>B</Link>
                <div>
                    <Switch>
                        <Route exact path={'/'}>HOME</Route>
                        <Route exact path={'/A'}>A</Route>
                        <AuthRoute exact path={'/B'}>B</AuthRoute>
                    </Switch>
                </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
