import { ActionTypes } from "../constants/action-types";
import axios from "axios";

export const fetchCountries = () => async (dispatch) => {
    const response = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag");
    dispatch({type: ActionTypes.FETCH_COUNTRIES, payload: response.data});

    console.log(response);
}