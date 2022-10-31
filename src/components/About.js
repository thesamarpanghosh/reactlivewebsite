import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../images/Women-Working-at-Home-Illustration.png";

const About = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>About <strong className="brand-name">Imagination Redefined</strong></h1>
                                    <h2 className="my-3">Group of self learnt Frontend Web Developers who followed their true callings of designing quality websites, fo you!</h2>
                                    <div className="mt-3">
                                        <NavLink to="/contact" className="btn-get-started">Contact Us</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="about img" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
