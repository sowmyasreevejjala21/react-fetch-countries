import React from "react";
import { useSelector } from "react-redux";
import Linkedin from '../assets/images/Linkedin.png';
import FaceBook from '../assets/images/facebook.png';
import Google from '../assets/images/google.png';
import Twitter from '../assets/images/twitter.png';
import './CountriesComponent.scss';

const CountriesComponent = () => {
    const countries = useSelector((state) => state.allCountries.countries);

    return (
        <>

            {Object.keys(countries).length === 0 ? <div>Loading...</div> :
                <div className="row">
                    {countries.map(country => {
                        const { name, flag, region } = country;
                        return (
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <img className="card-title" src={flag} />
                                        <div className="card-body_wrap">
                                            <h4 className="card-body_wrap-text">{name}</h4>
                                            <h5>region</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }

            <div className="footer text-center">
                <button type="button" className="btn btn-link btn-floating mx-1">
                    <img src={Google} alt="Google Img" />
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                    <img src={FaceBook} alt="FaceBook Img" />
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                    <img src={Linkedin} alt="Linkedin Img" />
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                    <img src={Twitter} alt="Twitter Img" />
                </button>
                <div className="footer-copyright">
                <p>example@email.com</p>
                <p>copyright &copy; 2020 Name. All rights reserved</p>
                </div>
            </div>

        </>
    )
}
export default CountriesComponent