import React from "react";
import "./worldStyles.css";
import { useSelector } from "react-redux";

function DashBoard() {
  const { worldStatus, topCountries, buttonType, name } = useSelector(
    (state) => state.corona
  );

  // sort the top countries according to value and then extract only top 10
  const sortedtopCountries = topCountries
    .sort(function (a, b) {
      return b[1] - a[1];
    })
    .slice(0, 10);

  return (
    <div className="world-area-status-wrapper">
      <h1>Global Status</h1>
      <div className="world-status">
        <h3>Total Cases</h3>
        <p>
          Total Confirmed Cases:
          {worldStatus.TotalConfirmed}
        </p>
        <p>
          Total Deaths Cases:
          {worldStatus.TotalDeaths}
        </p>
        <p>
          Total Recovered Cases:
          {worldStatus.TotalRecovered}
        </p>
        <h4>New Cases</h4>
        <p>
          New Confirmed Cases:
          {worldStatus.NewConfirmed}
        </p>
        <p>
          New Deaths Cases:
          {worldStatus.NewDeaths}
        </p>
        <p>
          New Recovered Cases:
          {worldStatus.NewRecovered}
        </p>
      </div>
      <hr />
      <div className="top-countries">
        <h3>
          Top {sortedtopCountries.length} countries by {buttonType} case
        </h3>
        {sortedtopCountries.map((country) => (
          <li>
            <b>{country[0]}</b>:{country[1]}
          </li>
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
