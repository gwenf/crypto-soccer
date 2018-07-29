import React from 'react';

// Extremely Simple Landing Page Component created ignoring best practices
// and keeping laziness alone in mind :P

export const LandingPage = () => (
    <div>
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
);

export default LandingPage;