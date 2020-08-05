import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

import Highcharts from "highcharts/highstock";
import MapChart from "./components/MapChart";
import DashBoard from './components/DashBoard'

import Header from "./components/Header";
import Footer from "./components/Footer";

import { getData } from "./actions/coronaActions";
require("highcharts/modules/map")(Highcharts);

function App() {
  // this is like mapStateToProps and passing to connect()
  // state is redux store
  const state = useSelector((state) => state.corona);

  // this is like mapDispatchToProps and passing to connect()
  const dispatch = useDispatch();

  const fetchData = (buttonType) => {
    dispatch(
      getData({
        buttonType,
      })
    );
  };
  const DashBoard = ({country}) => {
    return(
        <DashBoard country={country}/>
    );
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <Header />
        </div>

        {state.isLoading && <p>Loading...</p>}
        <div className="btn-grp">
          <button
            onClick={() => fetchData("cases")}
            className="btn"
            id="btn-cases"
          >
            Cases
          </button>
          <button
            onClick={() => fetchData("deaths")}
            className="btn"
            id="btn-deaths"
          >
            Deaths
          </button>
          <button
            onClick={() => fetchData("recovered")}
            className="btn"
            id="btn-recovered"
          >
            Recovered
          </button>
        </div>
        <div className="map-wrapper">
          <MapChart options={state.mapOptions} highcharts={Highcharts} />
        </div>
        <Switch>
          <Route path="/country" component={DashBoard('pokemon')} />
        </Switch>
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
