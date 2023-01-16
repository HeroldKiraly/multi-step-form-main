import React from 'react';

const Summary = () => {
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
                            <h2>Arcade (yearly)</h2>
                            <a>Change</a>
                        </div>
                        <span>$90/yr</span>
                    </div>
                    <hr></hr>
                    <div className="addons">
                        <h3>Online service</h3>
                        <span>+$10/yr</span>
                    </div>
                    <div className="addons">
                        <h3>Larger storage</h3>
                        <span>+$20/yr</span>
                    </div>
                </div>

                <div className="total-sum">
                    <h3>Total (per month/year)</h3>
                    <span>$120/yr</span>
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

export default Summary;