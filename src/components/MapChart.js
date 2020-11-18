import React from "react";
import HighchartsReact from "highcharts-react-official";
import "../App.css";

function MapChart({ options, highcharts }) {
  return (
    <div className="map-wrapper">
      <HighchartsReact
        highcharts={highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
}

export default MapChart;
