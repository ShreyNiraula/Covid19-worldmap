import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MapChart from "./components/MapChart";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalDashBoard from "./components/WorldDashboard";
import CountryDashboard from "./components/CountryComponents/CountryDashboard";

import { getWholeData } from "./actions/coronaActions";
require("highcharts/modules/map")(Highcharts); // has to be imported atlast

function App() {
  // const [search, setSearch] = useState("Nepal");
  const [buttonType, setButtonType] = useState("confirmed");

  const state = useSelector((state) => state.corona);
  const countryState = useSelector(
    (countryState) => countryState.countryCorona
  );

  const dispatch = useDispatch();

  const fetchData = (buttonType) => {
    dispatch(getWholeData({ buttonType }));
  };

  // const fetchChart = (buttonType)=>{
  //   var country = countryState.currentCountry
  //   console.log(buttonType+' pressed in chart')
  //   console.log(countryState.currentCountry)

  //   dispatch(getEachCountry(country, buttonType))

  // }

  /******************************Search bar*********************************/

  // const handleSearch = (e) => {
  //   if (e.key === "Enter") {
  //     // console.log(e.target.value);
  //     dispatch(getEachCountry(e.target.value, buttonType));
  //   }
  // };
  return (
    <div className="App">
      <Header />
      {state.isLoading && <p>Loading...</p>}
      <div className="btn-grp">
        <button
          onClick={() => {
            setButtonType("confirmed");
            fetchData(buttonType);
          }}
          className="btn"
          id="btn-cases"
        >
          Confirmed
        </button>
        <button
          onClick={() => {
            setButtonType("deaths");
            fetchData(buttonType);
          }}
          className="btn"
          id="btn-deaths"
        >
          Deaths
        </button>
        <button
          onClick={() => {
            setButtonType("recovered");
            fetchData(buttonType);
          }}
          className="btn"
          id="btn-recovered"
        >
          Recovered
        </button>
      </div>
      {/* <div className="search-area">
        <input type="text" onKeyDown={handleSearch} />
      </div> */}
      <div className="world-status-area">
        <MapChart options={state.mapOptions} highcharts={Highcharts} />
        <GlobalDashBoard />
      </div>
      {countryState.isLoading && <p>Chart Loading</p>}
      {countryState.isOpen && (
        <div className="country-dashboard">
          <div className="chart-area">
            {/* <div className="chart-btn-grp">
          <button onClick={()=>fetchChart('confirmed')} className='btn' id='btn-cases'>Confirmed</button>
          <button onClick={()=>fetchChart('deaths')} className='btn' id='btn-deaths'>Deaths</button>
          <button onClick={()=>fetchChart('recovered')} className='btn' id='btn-recovered'>Recovered</button>
        </div> */}
            <HighchartsReact
              highcharts={Highcharts}
              options={countryState.countryChartOptions}
            />
          </div>
          <CountryDashboard />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
