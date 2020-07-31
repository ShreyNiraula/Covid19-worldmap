import React from "react";
import {useSelector} from 'react-redux';
import "./App.css";

import Highcharts from "highcharts/highstock";
import MapChart from "./components/MapChart";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

function App() {
  // this is like mapStateToProps and passing to connect()
  // state is redux store
  const state = useSelector((state)=>state.corona);

  const fetchData = (buttonType)=>{
    // some of the action function ....
  }
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      {state.isLoading && <p>Loading...</p>}
      <div className="btn-grp" >
        <button onClick={()=>fetchData('cases')} className='btn' id='btn-cases'>Cases</button>
        <button onClick={()=>fetchData('deaths')} className='btn' id='btn-deaths'>Deaths</button>
        <button onClick={()=>fetchData('recovered')} className='btn' id='btn-recovered'>Recovered</button>
      </div>
      <div className="map-wrapper">
        <MapChart options={state.mapOptions} highcharts={Highcharts} />
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
