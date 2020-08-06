import {combineReducers} from 'redux';
import {coronaReducers} from './coronaReducers';
import {countryReducers} from './countryReducers';
export const rootReducer = combineReducers({
    corona:coronaReducers,
    countryCorona:countryReducers
})