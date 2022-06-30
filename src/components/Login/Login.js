import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Logo from '../../assets/images/Illustration-mdpi.svg';
import Linkedin from '../../assets/images/Linkedin.png';
import FaceBook from '../../assets/images/facebook.png';
import Google from '../../assets/images/google.png';
import Twitter from '../../assets/images/twitter.png';

const Login = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (input !== "" || password !== "") {
            navigate('/home')
        } else {
            alert("Please fill all Fields")
        }
    }

    return (
        <section className="text-center text-lg-start">
            <div className="login container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="card-body p-3 shadow-5">
                                <h2 className="fw-bold mb-4">Sign In</h2>
                                <p className="mb-4 create-acc">New User? <a href="/">Create an account</a></p>
                                <form onSubmit={submitHandler}>
                                    <div className="form-outline mb-4">
                                        <input type="text" placeholder="Username or email" id="form3Example3" className="form-control" onChange={(e)=> setInput(e.target.value)} />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form3Example4" placeholder="Password" className="form-control" onChange={(e)=> setPassword(e.target.value)} />
                                    </div>
                                    

                                    <div className="form-check d-flex mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                                        <label className="form-check-label" htmlFor="form2Example33">
                                            Subscribe to our newsletter
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        Sign In
                                    </button>

                                    <div className="text-center">
                                        <div className="divider d-flex align-items-center my-4">
                                            <p className="signin-options">or Sign In With:</p>
                                        </div>
                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <img src= {Google} alt="Google Img"/>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <img src= {FaceBook} alt="FaceBook Img"/>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <img src= {Linkedin} alt="Linkedin Img"/>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1">
                                            <img src= {Twitter} alt="Twitter Img"/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 right-container">
                        <img src={Logo} className="w-100 rounded-4 shadow-4"
                            alt="Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login