import React, { useEffect } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";

// useEffect(() => {
//   Axios.get(`https://api.covid19api.com/summary`).then((resp) => {
//     const countryWise = [];
//     var onclick=null;
//     resp.data.Countries.forEach((country) => {
//       var subarr = [];
//       subarr.push(country.CountryCode.toLowerCase());
//       subarr.push(country.TotalDeaths);
//       countryWise.push(subarr);
//       onclick = () => {
//         console.log("clicked", country.Country);
//       };
//       console.log("coun", countryWise);
//     });
//     dispatch({
//       type: "CORONA_SUCCESSFUL",
//       payload: {
//         countryWise,
//         color: "purple",
//         subtitle: "total death cases",
//         name: "Total Deaths",
//         onclick,
//       },
//     });
//   });
// });
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
