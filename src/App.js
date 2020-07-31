import React from "react";
import "./App.css";
import mapOptions from "./mapOptions/mapOptions";
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
  return (
    <div className="App">
      <div className="header">
        <Header></Header>
      </div>
      <div className="map-wrapper">
        <MapChart options={mapOptions} highcharts={Highcharts} />
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
