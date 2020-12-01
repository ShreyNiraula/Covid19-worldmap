import React from "react";
import { useSelector } from "react-redux";
import "./countryStyles.css";

const NationBoard = () => {
  const [countryStatus, setCountryStatus] = React.useState({
    isLoading: false,
    countryName: "",
    data: {
      active: "",
      cases: "",
      critical: "",
      deaths: "",
      recovered: "",
      countryInfo: {
        flag: "",
      },
      todayCases: "",
      todayRecovered: "",
    },
  });
  const { isLoading, countryName, countryData: data } = useSelector(
    (state) => state.countryStatus
  );

  React.useEffect(() => {
    setCountryStatus({
      isLoading: isLoading,
      countryName,
      data,
    });
  });

  console.log("the countryInfo is:", data.countryInfo);

  if (data.countryInfo === undefined) {
    data.countryInfo.flag = "";
  }

  return (
    <div className="country-status-details">
      <div className="image">
        <img src={countryStatus.data.countryInfo.flag} alt="" />
      </div>
      <br />
      <h2>Total Status of {countryStatus.countryName}</h2>
      <br />
      <ul>
        <li>Total Confirmed: {countryStatus.data.cases}</li>
        <li>Deaths: {countryStatus.data.deaths}</li>
        <li>Recovered: {countryStatus.data.recovered}</li>
        <li>Total Active Infectants: {countryStatus.data.active}</li>
        <li>Critical Count: {countryStatus.data.critical}</li>
        <li>Tests Counts: {countryStatus.data.tests}</li>
      </ul>
      <br />
      <h4>Today's Status</h4>
      <ul>
        <li>Today's Cases: {countryStatus.data.todayCases}</li>
        <li>today's Deaths: {countryStatus.data.todayDeaths}</li>
        <li>Today's Recovered: {countryStatus.data.todayRecovered}</li>
      </ul>
    </div>
  );
};

export default NationBoard;
