import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryData } from "../../actions/coronaActions";
import "../../App.css";

const CountryDashboard = () => {
  const { isLoading, countryName, countryData } = useSelector(
    (state) => state.countryStatus
  );

  console.log("iam in countrydashboard", countryData);

  //   const dispatch = useDispatch();

  //   //   useEffect(() => {
  //   //     dispatch(getCountryData);
  //   //   }, []);

  console.log("am i getting data in countryDashboard", countryData);

  // sort all the status from beginning by latest date and only assign the first element to latestStatus variable
  //   const latestStatus = countryData.sort(function (a, b) {
  //     return b.Date > a.Date ? 1 : -1;
  //   })[0];

  return (
    <div className="country-status">
      {isLoading && (
        <div>
          <h3>Overall cases of</h3>

          {/* <ul>
            <li>Date: {latestStatus.Date}</li>
            <li>Confirmed: {latestStatus.Confirmed}</li>
            <li>Deaths: {latestStatus.Deaths}</li>
            <li>Recovred: {latestStatus.Recovered}</li>
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default CountryDashboard;
