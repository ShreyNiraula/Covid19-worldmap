import {combineReducers} from 'redux';
import {coronaReducers} from './coronaReducers';

export const rootReducer = combineReducers({
    corona:coronaReducers
})