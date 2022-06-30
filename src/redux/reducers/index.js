import { combineReducers } from "redux";
import { countriesReducers } from "./fetchCountriesReducers";

const reducers = combineReducers({
    allCountries: countriesReducers,
})

export default reducers;