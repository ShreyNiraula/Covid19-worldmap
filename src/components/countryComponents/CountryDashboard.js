import React from "react";
import { useSelector } from "react-redux";
import "./countryStyles.css";

const CountryDashboard = () => {
  const { isLoading, countryName, countryData: data } = useSelector(
    (state) => state.countryStatus
  );

  console.log(data.countryInfo.flag);
  return (
    <div className="country-status-details">
      <div className="image">
        <img src={data.countryInfo.flag} alt="" />
      </div>
      <br />
      <h2>Total Status of {countryName}</h2>
      <br />
      <ul>
        <li>Total Confirmed: {data.cases}</li>
        <li>Deaths: {data.deaths}</li>
        <li>Recovered: {data.recovered}</li>
        <li>Total Active Infectants: {data.active}</li>
        <li>Critical Count: {data.critical}</li>
        <li>Tests Counts: {data.tests}</li>
      </ul>
      <br />
      <h4>Today's Status</h4>
      <ul>
        <li>Today's Cases: {data.todayCases}</li>
        <li>today's Deaths: {data.todayDeaths}</li>
        <li>Today's Recovered: {data.todayRecovered}</li>
      </ul>
    </div>
  );
};

export default CountryDashboard;
