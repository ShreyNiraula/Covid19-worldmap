import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

// import Highcharts from "highcharts/highstock";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import MapChart from "./components/MapChart";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { getWholeData } from "./actions/coronaActions";
import { getEachCountry } from "./actions/coronaActions";
import DashBoard from "./components/DashBoard";
require("highcharts/modules/map")(Highcharts);

function App() {
  // this is like mapStateToProps and passing to connect()
  // state is redux store
  const state = useSelector((state) => state.corona);
  const countryState = useSelector(
    (countryState) => countryState.countryCorona
  );

  // this is like mapDispatchToProps and passing to connect()
  const dispatch = useDispatch();

  const fetchData = (buttonType) => {
    dispatch(getWholeData({ buttonType }));
  };

  // const fetchChart = (buttonType)=>{
  //   var country = countryState.currentCountry
  //   console.log(buttonType+' pressed in chart')
  //   console.log(countryState.currentCountry)

  //   dispatch(getEachCountry(country, buttonType))

  // }
  return (
    <div className="App">
      <Header></Header>
      {state.isLoading && <p>Loading...</p>}
      <div className="btn-grp">
        <button
          onClick={() => fetchData("confirmed")}
          className="btn"
          id="btn-cases"
        >
          Confirmed
        </button>
        <button
          onClick={() => fetchData("deaths")}
          className="btn"
          id="btn-deaths"
        >
          Deaths
        </button>
        <button
          onClick={() => fetchData("recovered")}
          className="btn"
          id="btn-recovered"
        >
          Recovered
        </button>
      </div>
      <div className="world-status-area">
        <MapChart options={state.mapOptions} highcharts={Highcharts} />
        <div className="glance">
          <DashBoard></DashBoard>
        </div>
      </div>
      {countryState.isLoading && <p>Chart Loading</p>}
      {countryState.isOpen && (
        <div className="chart-area">
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
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
