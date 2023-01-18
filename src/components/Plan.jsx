import React, { useState, useEffect } from 'react';

const Plan = (props) => {
    let planButtons = document.querySelectorAll('.plan-button');
    let pricingLabels = document.querySelectorAll('.pricing-label');
    let planPrices = document.querySelectorAll('.price');
    let yearOfferLabels = document.querySelectorAll('.year-offer-text');
    let checkBox = document.querySelectorAll('#checkbox-toggle');

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
        if (props.pricing == 'yearly') {
            yearOfferLabels.forEach(label => {
                label.hidden = false;
            })
            planPrices.forEach(pricing => {
                if (pricing.id == 'price-arcade') {
                    pricing.innerHTML = '$90/yr'
                }
                if (pricing.id == 'price-advanced') {
                    pricing.innerHTML = '$120/yr'
                }
                if (pricing.id == 'price-pro') {
                    pricing.innerHTML = '$150/yr'
                }
            })
        } else {
            yearOfferLabels.forEach(label => {
                label.hidden = true;
            })
            planPrices.forEach(pricing => {
                if (pricing.id == 'price-arcade') {
                    pricing.innerHTML = '$9/mo'
                }
                if (pricing.id == 'price-advanced') {
                    pricing.innerHTML = '$12/mo'
                }
                if (pricing.id == 'price-pro') {
                    pricing.innerHTML = '$15/mo'
                }
            })
        }
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
                            <span id="price-arcade" className="price" >
                                $9/mo
                            </span>
                            <span id="yrl-offer" className="year-offer-text" hidden>
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
                            <span id="price-advanced" className="price">
                                $12/mo
                            </span>
                            <span id="yrl-offer" className="year-offer-text" hidden>
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
                            <span id="price-pro" className="price">
                                $15/mo
                            </span>
                            <span id="yrl-offer" className="year-offer-text" hidden>
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
                        <input id="checkbox-toggle" type="checkbox" onChange={handlePriceSwitch}></input>
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