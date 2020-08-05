import mapOptions from "../mapOptions/mapOptions";
import mapData from "../mapData/mapData";
import $ from "jquery";

const initialState = {
  isLoading: false,
  mapOptions: mapOptions,
};
export const coronaReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CORONA_WAITING":
      return { ...state, isLoading: true };

    case "CORONA_SUCCESSFUL":
      return {
        ...state,
        isLoading: false,

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
                  click: function () {
                    window.location.href = 'http://localhost:3000/' + this.name;
                    // const resp = await Axios.get(`https://api.covid19api.com/summary`);
                }
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
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
