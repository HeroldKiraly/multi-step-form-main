import React from 'react';

const Addons = (props) => {
    return (
        <>
            <div className="addons-content">
                <h1 className="heading">Pick add-ons</h1>
                <p className="subheading">
                    Add-ons help enhance your gaming experience.
                </p>

                <div className="addon-container">
                    <div className="addon-text">
                        <input type="checkbox"></input>
                        <div>
                            <label>Online services</label>
                            <span>Access to multiplayer games</span>
                        </div>
                    </div>
                    <span>+$1/mo</span>
                </div>

                <div className="addon-container">
                    <div className="addon-text">
                        <input type="checkbox"></input>
                        <div>
                            <label>Larger storage</label>
                            <span>Extra 1TB of cloud save</span>
                        </div>
                    </div>
                    <span>+$2/mo</span>
                </div>

                <div className="addon-container">
                    <div className="addon-text">
                        <input type="checkbox"></input>
                        <div>
                            <label>Customizable profile</label>
                            <span>Custom theme on your profile</span>
                        </div>
                    </div>
                    <span>+$2/mo</span>
                </div>

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