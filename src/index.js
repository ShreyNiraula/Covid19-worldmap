import React from "react";
import { useEffect } from "react";
// import Axios from "axios";

import {useSelector, useDispatch} from 'react-redux';
import {getData} from './actions/coronaActions'



import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";





const buttonType = 'initial'
store.dispatch(getData({buttonType}))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
