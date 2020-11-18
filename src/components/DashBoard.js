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
    .slice(0, 11);

  return (
    <div className="global-status-wrapper">
      <div className="global-status">
        <h2>Global Status</h2>
        <h6>Total Cases</h6>
        <p>
          <strong>Total Confirmed Cases: </strong>
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
        <h6>New Cases</h6>
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
        <h3>Top 50 countries by {buttonType} case</h3>
        {sortedtopCountries.map((country) => (
          <li>
            {country[0]}:{country[1]}
          </li>
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
