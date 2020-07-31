import mapOptions from "../mapOptions/mapOptions";

const initialState = {
  isLoading: false,
  mapOptions: mapOptions,
};
export const coronaReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CORONA_WAITING":
    //

    case "CORONA_SUCCESSFUL":
    //

    case "CORONA_REJECTED":
    //

    default:
      return state;
  }
};
