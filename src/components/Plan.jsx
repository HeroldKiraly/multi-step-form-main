import React, { useState, useEffect } from 'react';

const Plan = (props) => {
    let planButtons = document.querySelectorAll('.plan-button');
    let pricingLabels = document.querySelectorAll('.pricing-label');

    planButtons.forEach(button => button.addEventListener('click', function () {
        planButtons.forEach(planButton => planButton.classList.remove('selected-plan'));
        this.classList.add('selected-plan');

    }));

    const handlePriceSwitch = () => {
        if (props.pricing == 'monthly') {
            props.setPricing('yearly');
            return;
        }
        props.setPricing('monthly');
        return;
    }

    useEffect(() => {
        pricingLabels.forEach(label => {
            if (label.id == props.pricing) {
                label.classList.add('selected-pricing');
            } else {
                label.classList.remove('selected-pricing');
            }
        })
    })

    useEffect(() => {

    })

    return (
        <>
            <div className="plan-content">
                <h1 className="heading">Select your plan</h1>
                <p className="subheading">
                    You have the option of monthly or yearly billing.
                </p>
                <div className="selection-container">
                    <button id="arcade-plan" className="plan-button">
                        <img src="./src/assets/images/icon-arcade.svg"></img>
                        <div className="button-text">
                            <h2>
                                Arcade
                            </h2>
                            <span id="plan-price">
                                $9/mo
                            </span>
                            <span id="yrl-offer">
                                2 months free
                            </span>
                        </div>
                    </button>
                    <button id="advanced-plan" className="plan-button">
                        <img src="./src/assets/images/icon-advanced.svg"></img>
                        <div className="button-text">
                            <h2>
                                Advanced
                            </h2>
                            <span id="plan-price">
                                $12/mo
                            </span>
                            <span id="yrl-offer">
                                2 months free
                            </span>
                        </div>
                    </button>
                    <button id="pro-plan" className="plan-button">
                        <img src="./src/assets/images/icon-pro.svg"></img>
                        <div className="button-text">
                            <h2>
                                Pro
                            </h2>
                            <span id="plan-price">
                                $15/mo
                            </span>
                            <span id="yrl-offer">
                                2 months free
                            </span>
                        </div>
                    </button>
                </div>
                <div className="switch-container">
                    <h2 id="monthly" className="pricing-label selected-pricing">
                        Monthly
                    </h2>
                    <label className="switch">
                        <input type="checkbox" onChange={handlePriceSwitch}></input>
                        <span className="slider round"></span>
                    </label>
                    <h2 id="yearly" className="pricing-label">
                        Yearly
                    </h2>
                </div>

            </div>

            <div className="buttons-container">
                <button className="back-button" onClick={() => props.handleButtonClick('Info')}>
                    Go back
                </button>
                <button className="next-button" onClick={() => props.handleButtonClick('Addons')}>
                    Next Step
                </button>
            </div>

        </>
    );
};

export default Plan;