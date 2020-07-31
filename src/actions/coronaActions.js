import { Axis } from "highcharts";
import Axios from "axios";

export const getData = ({ buttonType }) => async (dispatch) => {
  try {
    dispatch({
      type: "CORONA_WAITING",
    });

    const countryWise = [];
    const resp = await Axios.get(`https://api.covid19api.com/summary`);
    resp.data.Countries.forEach((country) => {
        var subarr = [];
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalConfirmed);
        countryWise.push(subarr);
    });
    dispatch({
      type: "CORONA_SUCCESSFUL",
      payload: {
        countryWise,
        color:'blue',
        subtitle:'Total Number of Cases',
        name:'Total cases'
        // maxCases
      },
    });
  } catch (e) {
    dispatch({
      type: "CORONA_REJECTED",
    });
  }
};
