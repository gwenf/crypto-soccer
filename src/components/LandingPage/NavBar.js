import React from 'react';

// Images
import mainLogo from "./img/logos/logo.svg";
import burgerIcon from "./img/icons/burger.svg";

export const NavBar = () => (
    <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: '#e4f1fd', padding: '20px'}}>
        <div>
            <a href="/">
                <img src={mainLogo} alt="logo" />
            </a>
            {/*<h2 className={""}>CryptoSoccer</h2>*/}
        </div>
        <div>
            <div>
                <nav className="navbar d-none d-lg-block">
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
);

export default NavBar;