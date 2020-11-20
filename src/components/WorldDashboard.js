import React from "react";

import { useSelector } from "react-redux";

function DashBoard() {
  const { globalStatus, topCountries, buttonType, name } = useSelector(
    (state) => state.corona
  );

  // sort the top countries according to value and then extract only top 10
  const sortedtopCountries = topCountries
    .sort(function (a, b) {
      return b[1] - a[1];
    })
    .slice(0, 10);

  return (
    <div className="global-status-wrapper">
      <h2>Global Status</h2>
      <div className="global-status">
        <h3>Total Cases</h3>
        <p>
          <b>Total Confirmed Cases: </b>
          {globalStatus.TotalConfirmed}
        </p>
        <p>
          <strong>Total Deaths Cases: </strong>
          {globalStatus.TotalDeaths}
        </p>
        <p>
          <strong>Total Recovered Cases: </strong>
          {globalStatus.TotalRecovered}
        </p>
        <h4>New Cases</h4>
        <p>
          <strong>New Confirmed Cases: </strong>
          {globalStatus.NewConfirmed}
        </p>
        <p>
          <strong>New Deaths Cases: </strong>
          {globalStatus.NewDeaths}
        </p>
        <p>
          <strong>New Recovered Cases: </strong>
          {globalStatus.NewRecovered}
        </p>
      </div>
      <hr />
      <div className="top-countries">
        <h4>
          Top {sortedtopCountries.length} countries by {buttonType} case
        </h4>
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
