import Axios from "axios";

export const getEachCountry = ({ country, buttonType }) => async (dispatch) => {
  try {
    dispatch({
      type: "COUNTRY_LOADING",
    });
    // returns as array
    const resp = await Axios.get(
      `https://api.covid19api.com/total/dayone/country/${country}/status/${buttonType}`
    );
    const yValue = [];
    const xValue = [];
    // const nation  = `${country}`;

    // console.log('nation   '+ nation);

    // loop through each array
    resp.data.forEach((item) => {
      yValue.push(item.Cases);
      // xValue.push(item.Date)
      // format the date
      // split on T and then split on 2020- to extract only months and days
      xValue.push(item.Date.split("T")[0].split("2020-")[1]); //'2020-02-28T00:00:00Z'
    });
    console.log(yValue);
    console.log(xValue);
    dispatch({
      type: "COUNTRY_SUCCESSFUL",
      payload: {
        xValue,
        yValue,
        // nation,
        title: country,
        buttonType: buttonType,
        // subtitle:`Plot of ${buttonType} cases of ${country} ${buttonType} `,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const getData = ({ buttonType }) => async (dispatch) => {
  try {
    dispatch({
      type: "CORONA_WAITING",
    });

    const countryWise = [];
    var color = "";
    var subtitle = "";
    var name = "";
    var onclick = null;
    const resp = await Axios.get(`https://api.covid19api.com/summary`);
    resp.data.Countries.forEach((country) => {
      var subarr = [];

      if (buttonType === "confirmed" || buttonType === "initial") {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalConfirmed);
        countryWise.push(subarr);

        // make buttonType = totalcases for initial case
        buttonType = "confirmed";
        color = "blue";
        subtitle = "Total Number of Cases";
        name = "Total cases";
        onclick = () => {
          console.log("clicked", country.Country);
        };
      } else if (buttonType === "deaths") {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalDeaths);
        countryWise.push(subarr);
        color = "red";
        subtitle = "Total Death Counts";
        name = "Total Deaths";
      } else {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalRecovered);
        countryWise.push(subarr);
        color = "green";
        subtitle = "Total Recovered Counts";
        name = "Total Recovered";
      }
    });

    console.log("coun", countryWise);
    console.log("col", color);
    console.log("sub", subtitle);

    dispatch({
      type: "CORONA_SUCCESSFUL",
      payload: {
        countryWise,
        color,
        subtitle,
        name,
        onclick,
        buttonType,
      },
    });
  } catch (e) {
    dispatch({
      type: "CORONA_REJECTED",
    });
  }
};
