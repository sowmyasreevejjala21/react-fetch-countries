import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CountriesComponent from './CountriesComponent'; 
import { fetchCountries } from "../redux/actions/fetchCountriesActions";
import NavBar from "./NavBar/NavBar";
import './CountriesComponent.scss'

const CountriesList = () => {
    const products = useSelector((state) => state.allCountries);
    console.log(products);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCountries());
    },[]);
    return (
        <div className="container">
            <div className="comp-heading">
                <div className="comp-heading_name">
                    Countries
                </div>
                <>
                    <NavBar />
                </>
            </div>
        <div className="countries-list">
            <CountriesComponent />
        </div>
        </div>
    )
}
export default CountriesList