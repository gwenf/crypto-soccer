import React from 'react';

// Extremely Simple Landing Page Component created ignoring best practices
// and keeping laziness alone in mind :P

export const LandingPage = () => (
    <div style={{width: "900px", margin: "0 auto"}}>
        <div className="container text-center text-lg-left pt-30 pt-lg-120 pb-60 pb-lg-190">
            <div className="row justify-content-center justify-content-lg-start">
                <div className="col-12 col-sm-8 col-lg-6">
                    <h1>Learn to build your own</h1>
                    <h1>blockchain based game</h1>
                    <br />
                    <h4>The world simply does not have enough Soccer (or Football)</h4>
                    <h4>based games. Learn the basics of Solidity and building Dapps</h4>
                    <h4>by building a Crypto Soccer Game.</h4>
                    <br />
                    <a href="/start-learning"><button className="btn"><span>Go to Lessons</span></button></a>
                </div>
            </div>
        </div>
    </div>
);

export default LandingPage;