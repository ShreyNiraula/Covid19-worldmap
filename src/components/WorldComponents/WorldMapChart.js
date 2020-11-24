import React from "react";
import HighchartsReact from "highcharts-react-official";
import "./worldStyles.css";

function MapChart({ options, highcharts }) {
  return (
    <div className="world-area-map">
      <HighchartsReact
        highcharts={highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
}

export default MapChart;
