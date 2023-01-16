import React from 'react';

const Plan = () => {
    return (
        <>
            <div className="plan-content">
                <h1 className="heading">Select your plan</h1>
                <p className="subheading">
                    You have the option of monthly or yearly billing.
                </p>
                <div className="selection-container">
                    <button>
                        <img src="./src/assets/images/icon-arcade.svg"></img>
                        <div className="button-text">
                            <h2>
                                Arcade
                            </h2>
                            <span>
                                $9/mo
                            </span>
                        </div>
                    </button>
                    <button>
                        <img src="./src/assets/images/icon-advanced.svg"></img>
                        <div className="button-text">
                            <h2>
                                Advanced
                            </h2>
                            <span>
                                $12/mo
                            </span>
                        </div>
                    </button>
                    <button>
                        <img src="./src/assets/images/icon-pro.svg"></img>
                        <div className="button-text">
                            <h2>
                                Pro
                            </h2>
                            <span>
                                $15/mo
                            </span>
                        </div>
                    </button>
                </div>
                <div className="switch-container">
                    <h2>
                        Monthly
                    </h2>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                    <h2>
                        Yearly
                    </h2>
                </div>

            </div>

            <div className="buttons-container">
                <button className="back-button" disabled>
                    Go back
                </button>
                <button className="next-button">
                    Next Step
                </button>
            </div>

        </>
    );
};

export default Plan;