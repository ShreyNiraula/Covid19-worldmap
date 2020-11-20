import { combineReducers } from "redux";
import { coronaReducers } from "./coronaReducers";
import { countryReducers } from "./countryReducers";
import { countryStatusReducer } from "./countryStatusReducer";
export const rootReducer = combineReducers({
  corona: coronaReducers,
  countryCorona: countryReducers,
  countryStatus: countryStatusReducer,
});
