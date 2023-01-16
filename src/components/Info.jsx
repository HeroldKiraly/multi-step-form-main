import React from 'react';

const Info = () => {
    return (
        <>
            <div className="info-content">
                <h1 className="heading">Personal Info</h1>
                <p className="subheading">
                    Please provide your name, email address, and phone number.
                </p>

                <div className="input-labels">
                    <h2>
                        Name
                    </h2>
                    <h2 className="required-label">
                        This field is required
                    </h2>
                </div>
                <input placeholder="e.g. Stephen King"></input>

                <div className="input-labels">    
                    <h2>
                        Email Address
                    </h2>
                    <h2 className="required-label">
                        This field is required
                    </h2>
                </div>
                <input placeholder="e.g. stephenking@lorem.com"></input>

                <div className="input-labels">    
                    <h2>
                        Phone Number
                    </h2>
                    <h2 className="required-label">
                        This field is required
                    </h2>
                </div>
                <input placeholder="e.g. +1 234 567 890"></input>
            </div>

            <div className="buttons-container">
                <button className="back-button button-hidden" disabled>
                    Go back
                </button>
                <button className="next-button">
                    Next Step
                </button>
            </div>
        </>
    );
};

export default Info;