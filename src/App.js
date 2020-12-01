import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MapChart from "./components/WorldComponents/WorldMapChart";

import Header from "./components/GeneralComponents/Header";
import Footer from "./components/GeneralComponents/Footer";

import WorldDashboard from "./components/WorldComponents/WorldDashboard";
import { getWholeData } from "./actions/coronaActions";
import NationBoard from "./components/cDashboard.js/NationBoard";
import { getEachCountry, getCountryData } from "./actions/coronaActions";
import { store } from "./store";

require("highcharts/modules/map")(Highcharts); // has to be imported atlast

function App() {
  const [choicedCountry, setChoicedCountry] = useState("");
  const [buttonType, setButtonType] = useState("confirmed");

  const state = useSelector((state) => state.corona);
  const countryState = useSelector(
    (countryState) => countryState.countryCorona
  );

  const dispatch = useDispatch();

  const fetchData = (buttonType) => {
    dispatch(getWholeData({ buttonType }));
  };

  // TODO: for graph change...
  // const fetchChart = (buttonType)=>{
  //   var country = countryState.currentCountry
  //   console.log(buttonType+' pressed in chart')
  //   console.log(countryState.currentCountry)

  //   dispatch(getEachCountry(country, buttonType))

  // }

  // / TODO: choicedCountry bar
  const handleSelect = (e) => {
    console.log("the country I selected is:", e.target.value);
    setChoicedCountry(e.target.value);
    try {
      dispatch(getCountryData(e.target.value));
      dispatch(getEachCountry(e.target.value, buttonType));
    } catch (err) {
      console.log("error in handleselect dispatch");
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      {state.isLoading && <p>Loading...</p>}
      <div className="btn-grp">
        <button
          onClick={() => {
            setButtonType("confirmed");
            fetchData(buttonType);
          }}
          className="btn"
          id="btn-cases"
        >
          Confirmed
        </button>
        <button
          onClick={() => {
            setButtonType("deaths");
            fetchData(buttonType);
          }}
          className="btn"
          id="btn-deaths"
        >
          Deaths
        </button>
        <button
          onClick={() => {
            setButtonType("recovered");
            fetchData(buttonType);
          }}
          className="btn"
          id="btn-recovered"
        >
          Recovered
        </button>
      </div>

      <div>
        <select onChange={handleSelect} value={choicedCountry}>
          {countries.map((country, index) => (
            <option value={country}>{country}</option>
          ))}
        </select>
      </div>

      <div className="world-area">
        <MapChart options={state.mapOptions} highcharts={Highcharts} />
        <WorldDashboard />
      </div>

      {countryState.isLoading && <p>Chart Loading</p>}
      {countryState.isOpen && (
        <div className="country-dashboard">
          <div className="country-chart-area">
            {/* <div className="chart-btn-grp">
                <button onClick={()=>fetchChart('confirmed')} className='btn' id='btn-cases'>Confirmed</button>
                <button onClick={()=>fetchChart('deaths')} className='btn' id='btn-deaths'>Deaths</button>
                <button onClick={()=>fetchChart('recovered')} className='btn' id='btn-recovered'>Recovered</button>
                </div> */}
            <HighchartsReact
              highcharts={Highcharts}
              options={countryState.countryChartOptions}
            />
          </div>
          <NationBoard />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;

var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central Arfrican Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cuba",
  "Curacao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauro",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
