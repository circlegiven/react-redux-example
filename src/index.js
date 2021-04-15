import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './store';
import {setInterceptor} from "./client";

const store = createStore(reducer);
setInterceptor(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
