import mapOptions from "../Options/mapOptions";
import mapData from "../mapData/mapData";
import { store } from "../store";
import { useDispatch } from "react-redux";
import { getEachCountry, getCountryData } from "../actions/coronaActions";

const initialState = {
  mapOptions: mapOptions,
  globalStatus: {},
  isLoading: false,
  buttonType: "initial",
  topCountries: [],
  name: "",
};

export const coronaReducers = (state = initialState, action) => {
  // const dispatch = useDispatch()
  switch (action.type) {
    case "CORONA_WAITING":
      return {
        ...state,
        isLoading: true,
        //  country:action.payload.name
      };

    case "CORONA_SUCCESSFUL":
      return {
        ...state,
        buttonType: action.payload.buttonType,
        globalStatus: action.payload.globalStatus,
        topCountries: action.payload.topCountries,
        isLoading: false,
        name: action.payload.name,

        // country:action.payload.name ,
        mapOptions: {
          ...state,
          series: [
            {
              mapData: mapData, //static data
              // nullColor: 'yellow',
              states: {
                hover: {
                  color: action.payload.color,
                },
              },
              name: action.payload.name,
              dataLabels: {
                enabled: true,
                format: "{point.name}",
              },
              point: {
                events: {
                  click: async function () {
                    const country = this.name;
                    const buttonType = action.payload.buttonType;
                    await store.dispatch(getCountryData(country));
                    await store.dispatch(getEachCountry(country, buttonType));
                  },
                },
              },
              data: action.payload.countryWise,
            },
          ],
          title: {
            text: "Worldwise Corona Cases",
          },
          subtitle: {
            text: action.payload.subtitle,
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: "bottom",
            },
          },
          colorAxis: {
            min: 0,
          },
        },
      };

    case "CORONA_REJECTED":
      return {
        ...state,
        isLoading: false,
        // country:action.payload.name
      };

    default:
      return state;
  }
};
