const initialState = {
  isLoading: false,
  countryName: "",
  countryData: [],
};

export const countryStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTRY_STATUS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "COUNTRY_STATUS_SUCCESSFUL":
      console.log("i am in country_status_successful");
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        countryName: action.payload.country,
        countryData: action.payload.data,
      };

    case "COUNTRY_STATUS_FAILURE":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
