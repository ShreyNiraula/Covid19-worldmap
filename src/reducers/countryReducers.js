import { countryChartOptions } from "../Options/countryChartOptions";
import mapData from "../mapData/mapData";
import { store } from "../store";
import { useDispatch } from "react-redux";
// import $ from "jquery";
import { getEachCountry } from "../actions/coronaActions";

const initialState = {
  countryChartOptions: countryChartOptions,
  isLoading: false,
  isOpen: false,
  // currentCountry:false,
};

export const countryReducers = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTRY_LOADING":
      return {
        ...state,
        isLoading: true,
        isOpen: false,
        // currentCountry:action.payload.title.toLowerCase()
      };

    case "COUNTRY_SUCCESSFUL":
      return {
        ...state,
        isLoading: false,
        isOpen: true,
        // currentCountry:action.payload.title.toLowerCase(),

        countryChartOptions: {
          ...state,
          title: {
            text: `${action.payload.title} ${action.payload.buttonType} cases from beginning`,
          },
          // subtitle:{
          //    text: action.payload.subtitle
          // },
          xAxis: {
            title: {
              text: "Days",
            },
            categories: action.payload.xValue,
          },
          series: [
            {
              name: `${action.payload.buttonType} cases`,
              data: action.payload.yValue,
            },
          ],
        },
      };
    case "COUNTRY_FAIL":
      return {
        ...state,
        isLoading: false,
        isOpen: false,
        // currentCountry:action.payload.title.toLowerCase()
      };
    default:
      return state;
  }
};
