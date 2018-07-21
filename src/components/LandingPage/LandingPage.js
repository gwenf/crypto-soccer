import React from 'react';

// Extremely Simple Landing Page Component created ignoring best practices
// and keeping readablility alone in mind :P

export const LandingPage = (props) => (
    <div>
        <h1>CryptoSoccer</h1>
        <p>{props.health}</p>
        <button onClick={() => props.handleHealth()}>Health</button>

        <section className={"headers bg-light bg-devices"} id="headers-14">
            <div class="ph-15 ph-sm-30 ph-lg-70 p-40">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto"><a href=""><img src="img/logos/logo.svg"/></a>
                    </div>
                    <div class="col-auto">
                        <nav class="navbar d-none d-lg-block"><a href="">Menu one</a><a href="">Menu two</a><a href="">Menu three</a><a class="btn btn-small">Button</a>
                        </nav>
                        <nav class="navbar d-lg-none"><a class="dropdown-right" href=""><img src="img/icons/burger.svg"/></a><a class="btn btn-small d-none d-sm-inline-block">Button</a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="container text-center text-lg-left pt-30 pt-lg-120 pb-60 pb-lg-190">
                <div class="row justify-content-center justify-content-lg-start">
                    <div class="col-12 col-sm-8 col-lg-6">
                        <h1 class="mb-20">Wireframe connects the  conceptual structure</h1>
                        <h4 class="mb-30">
                            Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia, there live the blind texts away

                        </h4>
                        <button class="btn"><span>Button</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);