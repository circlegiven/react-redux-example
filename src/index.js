import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './store';

// 인터셉터
const interceptorReduxAction = store => next => action =>{
    // 캐치할 action
    console.log(action.type);

    return next(action);
}

const store = createStore(
    reducer,
    applyMiddleware(interceptorReduxAction)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);