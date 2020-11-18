// const initialState = {
//   globalData: {},
//   isLoading: false,
// };

// export const globalDataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "GLOBAL_WAITING":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case "GLOBAL_SUCCESSFUL":
//       return {
//         ...state,
//         globalData: action.payload,
//         isLoading: false,
//       };

//     case "GLOBAL_FAILURE":
//       return {
//         ...state,
//         isLoading: false,
//       };

//     default:
//       return state;
//   }
// };
