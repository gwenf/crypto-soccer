import React from 'react';

// Images
import mainLogo from "./img/logos/logo.svg";
import burgerIcon from "./img/icons/burger.svg";

// Extremely Simple Landing Page Component created ignoring best practices
// and keeping laziness alone in mind :P

export const LandingPage = () => (
    <div>
        <section className={"headers bg-light bg-devices"} id="headers-14">
            <div className={"ph-15 ph-sm-30 ph-lg-70 p-40"}>
                <div className={"row justify-content-between align-items-center"}>
                    <div className={"col float-left"} style={{ float:"left", zIndex:1035 }}>
                        <a href="/">
                            <img src={mainLogo} alt="logo" /></a>
                        {/*<h2 className={""}>CryptoSoccer</h2>*/}
                    </div>
                    <div className={"col float-right"} style={{ float:"right", zIndex:1035 }}>
                        <div>
                            <nav className={"navbar d-none d-lg-block"}>
                                <a href="/metamask-utilities">Metamask Utilities</a>
                                <a href="/health">Health</a>
                                <a href="/register">Register</a>
                                <a className={"btn btn-small"} href="/start-learning">Go to Lessons</a>
                            </nav>
                        </div>
                        {/*<div>*/}
                            {/*<nav className={"navbar d-lg-none"}>*/}
                                {/*<a className={"dropdown-right"} href="">*/}
                                {/*<img src={burgerIcon} alt="mobile-burger-icon"/></a>*/}
                                {/*<a className={"btn btn-small d-none d-sm-inline-block"}>Button</a>*/}
                            {/*</nav>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="container text-center text-lg-left pt-30 pt-lg-120 pb-60 pb-lg-190">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-12 col-sm-8 col-lg-6">
                            <h1>Wireframe connects the</h1>
                            <h1>conceptual structure</h1>
                            <br />
                            <h4>Far far away, behind the word mountains, far from the</h4>
                            <h4>    countries Vokalia and Consonantia, there live the blind texts</h4>
                            <h4>    away</h4>
                            <br />
                            <button className="btn"><span>Button</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default LandingPage;