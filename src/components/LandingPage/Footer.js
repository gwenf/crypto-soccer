import React from 'react';

// Images
import mainLogo from "./img/logos/logo.svg";
import burgerIcon from "./img/icons/burger.svg";
import behanceLogo from "./img/socials/behance.svg";
import facebookLogo from "./img/socials/facebook.svg";
import googleLogo from "./img/socials/google.svg";
import instagramLogo from "./img/socials/instagram.svg";
import twitterLogo from "./img/socials/twitter.svg";

export const Footer = () => (
    <div>
        <hr />
        <section className={"footers"} id={"footers-9"}>
            <div className={"container"}>
                <hr />
                <div style={{width: "900px", margin: "0 auto", marginTop: "-15px"}}
                     className={"row justify-content-between align-items-center text-center text-sm-left p-40"}>
                    <div className={"col-12 col-sm-auto mb-20 mb-sm-0"}>
                        <nav className={"navbar"} style={{float: "left"}}>
                            <a href="/">Home</a>
                            <a href="/register">Register</a>
                            <a href="/start-learning">Go to Lessons</a>
                        </nav>
                    </div>

                    <div id={"copyright"} className={"col-12 col-sm-auto"} style={{float: "right"}}>
                        <p>&copy; 2018 &mdash; <a
                            href="/">CryptoSoccer</a> &mdash; All rights reserved</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Footer;