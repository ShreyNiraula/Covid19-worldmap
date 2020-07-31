import React from 'react';
import './App.css';
import mapOptions from './mapOptions/mapOptions'
import Highcharts from "highcharts/highstock";
import MapChart from "./components/MapChart";
// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);




function App() {
  return (
    <div className="App">
      <MapChart options={mapOptions} highcharts={Highcharts} />
    </div>
  );
}

export default App;
