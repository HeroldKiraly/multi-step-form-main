import React, { useEffect } from 'react';

const Addons = (props) => {
    const handleClick = (target) => {
        if (target.classList.contains('selected-addon')) {
            target.classList.remove('selected-addon');
            document.getElementById(`${target.name}`).checked = false;
            if (target.name == 'addonOne') {
                props.setAddonOne(false);
            } else if (target.name == 'addonTwo') {
                props.setAddonTwo(false);
            } else {
                props.setAddonThree(false);
            }
        } else {
            target.classList.add('selected-addon');
            document.getElementById(`${target.name}`).checked = true;
            if (target.name == 'addonOne') {
                props.setAddonOne(true);
            } else if (target.name == 'addonTwo') {
                props.setAddonTwo(true);
            } else {
                props.setAddonThree(true);
            }
        }
    }
    
    return (
        <>
            <div className="addons-content">
                <h1 className="heading">Pick add-ons</h1>
                <p className="subheading">
                    Add-ons help enhance your gaming experience.
                </p>

                <button name="addonOne" value="0" className="addon-container" onClick={e => handleClick(e.currentTarget)}>
                    <div className="addon-text">
                        <input id="addonOne" type="checkbox"></input>
                        <div>
                            <h2>Online services</h2>
                            <span>Access to multiplayer games</span>
                        </div>
                    </div>
                    {props.yearlyPricing 
                        ? <span className="addon-price">+$10/yr</span>
                        : <span className="addon-price">+$1/mo</span>
                    }
                </button>

                <button name="addonTwo" value="1" className="addon-container" onClick={e => handleClick(e.currentTarget)}>
                    <div className="addon-text">
                        <input id="addonTwo" type="checkbox" className=""></input>
                        <div>
                            <h2>Larger storage</h2>
                            <span>Extra 1TB of cloud save</span>
                        </div>
                    </div>
                    {props.yearlyPricing 
                        ? <span className="addon-price">+$20/yr</span>
                        : <span className="addon-price">+$2/mo</span>
                    }
                </button>

                <button name="addonThree" value="2" className="addon-container" onClick={e => handleClick(e.currentTarget)}>
                    <div className="addon-text">
                        <input id="addonThree" type="checkbox"></input>
                        <div>
                            <h2>Customizable profile</h2>
                            <span>Custom theme on your profile</span>
                        </div>
                    </div>
                    {props.yearlyPricing 
                        ? <span className="addon-price">+$20/yr</span>
                        : <span className="addon-price">+$2/mo</span>
                    }
                </button>

            </div>

            <div className="buttons-container">
                <button className="back-button" onClick={() => props.handleButtonClick('Plan')}>
                    Go back
                </button>
                <button className="next-button" onClick={() => props.handleButtonClick('Summary')}>
                    Next Step
                </button>
            </div>
        </>
    );
};

export default Addons;