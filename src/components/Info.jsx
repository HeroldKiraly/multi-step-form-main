import React from 'react';

const Info = () => {
    return (
        <>
            <div className="content">
                <h1>Personal Info</h1>
                <p>
                    Please provide your name, email address, and phone number.
                </p>
                
                <h2>
                    Name
                </h2>
                <input></input>
                e.g. Stephen King

                <h2>
                    Email Address
                </h2>
                <input></input>
                e.g. stephenking@lorem.com

                <h2>
                    Phone Number
                </h2>
                <input></input>
                e.g. +1 234 567 890
            </div>

            <div className="buttons-container">
                <button className="back-button">
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