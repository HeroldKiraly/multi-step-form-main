import React, { useEffect } from 'react';
import planData from '../data/plan.js';
import arcadeImage from '../assets/images/icon-arcade.svg';
import advancedImage from '../assets/images/icon-advanced.svg';
import proImage from '../assets/images/icon-pro.svg';

const Plan = (props) => {        
    const handlePriceSwitch = () => {
        if (props.yearlyPricing == false) {
            props.setYearlyPricing(true);
            return;
        }
        props.setYearlyPricing(false);
        return;
    }
    
    const handleNextButton = () => {    
        if (props.plan == undefined) {
            return;
        }
        props.handleButtonClick('Addons')
    }
    
    
    useEffect(() => {
        let planButtons = document.querySelectorAll('.plan-button');
        planButtons.forEach(button => {
            if (props.plan == button.name) {
                button.classList.add('selected-plan');
            }
        })
        planButtons.forEach(button => button.addEventListener('click', function () {
            planButtons.forEach(planButton => planButton.classList.remove('selected-plan'));
            this.classList.add('selected-plan');
            props.setPlan(this.name)
        }));
    })
    
    return (
        <>
            <div className="plan-content">
                <h1 className="heading">Select your plan</h1>
                <p className="subheading">
                    You have the option of monthly or yearly billing.
                </p>
                <div className="selection-container">
                    <button id="arcade-plan" name="Arcade" className="plan-button">
                        <img src={arcadeImage}></img>
                        <div className="button-text">
                            <h2>
                                Arcade
                            </h2>
                            <span id="price-arcade" className="price" >
                                {props.yearlyPricing 
                                    ? `$${planData["Arcade"].price * 10}/yr`
                                    : `$${planData["Arcade"].price}/mo`
                                }
                            </span>
                            {props.yearlyPricing
                                ?
                                <span id="yrl-offer" className="year-offer-text">
                                    2 months free
                                </span>
                                :
                                <></>
                            }
                        </div>
                    </button>
                    <button id="advanced-plan" name="Advanced" className="plan-button">
                        <img src={advancedImage}></img>
                        <div className="button-text">
                            <h2>
                                Advanced
                            </h2>
                            <span id="price-advanced" className="price">
                                {props.yearlyPricing 
                                    ? `$${planData["Advanced"].price * 10}/yr`
                                    : `$${planData["Advanced"].price}/mo`
                                }
                            </span>
                            {props.yearlyPricing
                                ?
                                <span id="yrl-offer" className="year-offer-text">
                                    2 months free
                                </span>
                                :
                                <></>
                            }
                        </div>
                    </button>
                    <button id="pro-plan" name="Pro" className="plan-button">
                        <img src={proImage}></img>
                        <div className="button-text">
                            <h2>
                                Pro
                            </h2>
                            <span id="price-pro" className="price">
                                {props.yearlyPricing 
                                    ? `$${planData["Pro"].price * 10}/yr`
                                    : `$${planData["Pro"].price}/mo`
                                }
                            </span>
                            {props.yearlyPricing
                                ?
                                <span id="yrl-offer" className="year-offer-text">
                                    2 months free
                                </span>
                                :
                                <></>
                            }
                        </div>
                    </button>
                </div>
                <div className="switch-container">
                    {props.yearlyPricing 
                        ? <h2 id="monthly">Monthly</h2>
                        : <h2 id="monthly" className="selected-pricing">Monthly</h2>
                    }
                    <label className="switch">
                        {props.yearlyPricing
                            ? <input id="checkbox-toggle" type="checkbox" onChange={handlePriceSwitch} checked></input> 
                            : <input id="checkbox-toggle" type="checkbox" onChange={handlePriceSwitch}></input>
                        }
                        <span className="slider round"></span>
                    </label>
                    {props.yearlyPricing 
                        ? <h2 id="yearly" className="selected-pricing">Yearly</h2> 
                        : <h2 id="yearly">Yearly</h2>
                    }
                </div>

            </div>

            <div className="buttons-container">
                <button className="back-button" onClick={() => props.handleButtonClick('Info')}>
                    Go back
                </button>
                <button className="next-button" onClick={() => handleNextButton()}>
                    Next Step
                </button>
            </div>

        </>
    );
};

export default Plan;