import React from 'react';
import planData from '../data/plan.js';
import addonData from '../data/addon.js';


const Summary = (props) => {
    let plan = props.plan;

    let sum = 0;
    const sumOfAll = () => {
        let sumOfAddons = 0;
        if (props.yearlyPricing) {
            if (props.addonOne) {
                sumOfAddons += addonData["addonOne"].price * 10;
            }
            if (props.addonTwo) {
                sumOfAddons += addonData["addonTwo"].price * 10;
            }
            if (props.addonThree) {
                sumOfAddons += addonData["addonThree"].price * 10;
            }
            sum += sumOfAddons;
            sum += planData[`${plan}`].price * 10;
        } else {
            if (props.addonOne) {
                sumOfAddons += addonData["addonOne"].price;
            }
            if (props.addonTwo) {
                sumOfAddons += addonData["addonTwo"].price;
            }
            if (props.addonThree) {
                sumOfAddons += addonData["addonThree"].price;
            }
            sum += sumOfAddons;
            sum += planData[`${plan}`].price;
        }
        return sum;
    }
    sumOfAll();

    return (
        <>
            <div className="summary-content">
                <h1 className="heading">Finishing Up</h1>
                <p className="subheading">
                    Double-check everything looks OK before confirming.
                </p>

                <div className="choices-container">
                    <div className="primary-plan">
                        <div>
                            <h2>{plan} ({props.yearlyPricing ? 'yearly' : 'monthly'})</h2>
                            <a onClick={() => props.handleButtonClick('Plan')}>Change</a>
                        </div>
                        <span>${props.yearlyPricing ? planData[`${plan}`].price * 10 : planData[`${plan}`].price}/{props.yearlyPricing ? 'yr' : 'mo'}</span>
                    </div>
                    <hr></hr>
                    {props.addonOne
                        ?
                        <div className="addons">
                            <h3>{addonData["addonOne"].name}</h3>
                            {props.yearlyPricing
                                ? <span>+${addonData["addonOne"].price * 10}/yr</span>
                                : <span>+${addonData["addonOne"].price}/mo</span>
                            }
                        </div>
                        : <></>
                    }
                    {props.addonTwo
                        ?
                        <div className="addons">
                            <h3>{addonData["addonTwo"].name}</h3>
                            {props.yearlyPricing
                                ? <span>+${addonData["addonTwo"].price * 10}/yr</span>
                                : <span>+${addonData["addonTwo"].price}/mo</span>
                            }
                        </div>
                        : <></>
                    }
                    {props.addonThree
                        ?
                        <div className="addons">
                            <h3>{addonData["addonThree"].name}</h3>
                            {props.yearlyPricing
                                ? <span>+${addonData["addonThree"].price * 10}/yr</span>
                                : <span>+${addonData["addonThree"].price}/mo</span>
                            }
                        </div>
                        : <></>
                    }
                </div>

                <div className="total-sum">
                    <h3>Total (per {props.yearlyPricing ? 'year' : 'month'})</h3>
                    <span>${sum}/{props.yearlyPricing ? 'yr' : 'mo'}</span>
                </div>
            </div>


            <div className="buttons-container">
                <button className="back-button" onClick={() => props.handleButtonClick('Addons')}>
                    Go back
                </button>
                <button className="next-button" onClick={() => props.handleButtonClick('Thanks')}>
                    Confirm
                </button>
            </div>
        </>
    );
};

export default Summary;