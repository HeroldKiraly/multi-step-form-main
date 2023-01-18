import React from 'react';
import planData from '../data/plan.js';
import addonData from '../data/addon.js';


const Summary = (props) => {
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
                            <h2>{props.plan} ({props.yearlyPricing ? 'yearly' : 'monthly'})</h2>
                            <a onClick={() => props.handleButtonClick('Plan')}>Change</a>
                        </div>
                    </div>
                    <hr></hr>
                    {props.addonOne
                        ?
                        <div className="addons">
                            <h3>{addonData[0][0].name}</h3>
                            {props.yearlyPricing
                                ? <span>+$10/yr</span>
                                : <span>+$1/mo</span>
                            }
                        </div>
                        : <></>
                    }
                    {props.addonTwo
                        ?
                        <div className="addons">
                            <h3>{addonData[1][0].name}</h3>
                            {props.yearlyPricing
                                ? <span>+$20/yr</span>
                                : <span>+$2/mo</span>
                            }
                        </div>
                        : <></>
                    }
                    {props.addonThree
                        ?
                        <div className="addons">
                            <h3>{addonData[2][0].name}</h3>
                            {props.yearlyPricing
                                ? <span>+$20/yr</span>
                                : <span>+$2/mo</span>
                            }
                        </div>
                        : <></>
                    }
                </div>

                <div className="total-sum">
                    <h3>Total (per {props.yearlyPricing ? 'year' : 'month'})</h3>
                    <span>$120/yr</span>
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