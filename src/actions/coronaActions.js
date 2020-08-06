import Axios from "axios";


export const getData = ({ buttonType }) => async (dispatch) => {
  try {
    dispatch({
      type: "CORONA_WAITING",
    });

    const countryWise = [];
    var color='';
    var subtitle='';
    var name='';
    var onclick=null;
    const resp = await Axios.get(`https://api.covid19api.com/summary`);
    resp.data.Countries.forEach((country) => {

      var subarr = [];

      if (buttonType === "cases" || buttonType === "initial") {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalConfirmed);
        countryWise.push(subarr);
        color='blue';
        subtitle='Total Number of Cases';
        name='Total cases';
        onclick = ()=>{console.log('clicked', country.Country)}

      } else if (buttonType === "deaths" ) {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalDeaths);
        countryWise.push(subarr);
        color='red';
        subtitle='Total Death Counts';
        name ='Total Deaths'

      } else {
        subarr.push(country.CountryCode.toLowerCase());
        subarr.push(country.TotalRecovered);
        countryWise.push(subarr);
        color='green';
        subtitle='Total Recovered Counts';
        name='Total Recovered';
      }
    });

    console.log('coun', countryWise);
    console.log('col', color);
    console.log('sub', subtitle);
    
    dispatch({
      type: "CORONA_SUCCESSFUL",
      payload: {
        countryWise,
        color,
        subtitle,
        name,
        onclick,
      },
    });
  } catch (e) {
    dispatch({
      type: "CORONA_REJECTED",
    });
  }
};
