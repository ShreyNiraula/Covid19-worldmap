import Axios from "axios";

export const getEachCountry = (country, buttonType) => async (dispatch) => {
  try {
    dispatch({
      type: "COUNTRY_CHART_LOADING",
    });
    // returns as array
    const resp = await Axios.get(
      `https://api.covid19api.com/total/dayone/country/${country}/status/${buttonType}`
    );
    const yValue = [];
    const xValue = [];

    resp.data.forEach((item) => {
      yValue.push(item.Cases);

      // format the date
      // split on T and then split on 2020- to extract only months and days
      xValue.push(item.Date.split("T")[0].split("2020-")[1]); //'2020-02-28T00:00:00Z'
    });
    console.log("xvalue", xValue);
    dispatch({
      type: "COUNTRY_CHART_SUCCESSFUL",
      payload: {
        xValue, // array of dates
        yValue, // array of counts (death, recovered or total)
        title: country, // string
        buttonType: buttonType, // string
        // subtitle:`Plot of ${buttonType} cases of ${country} ${buttonType} `,
      },
    });
  } catch (e) {
    dispatch({
      type: "COUNTRY_CHART_FAIL",
    });
    console.log(e);
  }
};

export const getCountryData = (country) => async (dispatch) => {
  try {
    dispatch({
      type: "COUNTRY_STATUS_LOADING",
    });

    // const resp = await Axios.get(
    //   `https://api.covid19api.com/dayone/country/${country}`
    // );
    const resp = await Axios.get(
      `https://disease.sh/v3/covid-19/countries/${country}?yesterday=true&twoDaysAgo=false&strict=true`
    );
    console.log("format", resp.data);

    dispatch({
      type: "COUNTRY_STATUS_SUCCESSFUL",
      payload: {
        data: resp.data,
        country: country,
      },
    });
  } catch (err) {
    dispatch({
      type: "COUNTRY_STATUS_FAILURE",
    });
    console.log(err);
  }
};

export const getWholeData = ({ buttonType }) => async (dispatch) => {
  try {
    // dispatch for the case of loading case, without any payload
    dispatch({
      type: "CORONA_WAITING",
    });

    // for loading the api data
    const topCountries = [];
    const countryWise = [];
    var color = "";
    var subtitle = "";
    var name = "";
    const resp = await Axios.get(`https://api.covid19api.com/summary`); // resp.data.countries = actually countries
    var globalStatus = resp.data.Global;
    resp.data.Countries.forEach((country) => {
      var subarr = [];
      var subarrForTop = [];
      // console.log("countris:", country);

      if (buttonType === "confirmed" || buttonType === "initial") {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalConfirmed);
        countryWise.push(subarr);

        subarrForTop.push(country.Country);
        subarrForTop.push(country.TotalConfirmed);
        topCountries.push(subarrForTop);

        // make buttonType = totalcases for initial case
        buttonType = "confirmed";
        color = "blue";
        subtitle = "Total Number of Cases";
        name = "Total cases";
      } else if (buttonType === "deaths") {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalDeaths);
        countryWise.push(subarr);

        subarrForTop.push(country.Country);
        subarrForTop.push(country.TotalDeaths);
        topCountries.push(subarrForTop);
        color = "red";
        subtitle = "Total Death Counts";
        name = "Total Deaths";
      } else {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalRecovered);
        countryWise.push(subarr);
        subarrForTop.push(country.Country);
        subarrForTop.push(country.TotalRecovered);
        topCountries.push(subarrForTop);
        color = "green";
        subtitle = "Total Recovered Counts";
        name = "Total Recovered";
      }
    });
    // console.log("countrywise", countryWise); // [{},{},...] where each {countryCode:, value:,}
    console.log("global status", globalStatus);
    dispatch({
      type: "CORONA_SUCCESSFUL",
      payload: {
        globalStatus, // object with global status data
        topCountries,
        countryWise, // array
        color, // string
        subtitle, // string
        name, // string
        buttonType, // string
      },
    });
  } catch (e) {
    // case of api data access failure
    dispatch({
      type: "CORONA_REJECTED",
    });
  }
};
