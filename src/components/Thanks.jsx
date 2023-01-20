import React from 'react';
import thanksImage from '../assets/images/icon-thank-you.svg';

const Thanks = () => {
    return(
        <>
            <div className="thanks-content">
                <img src={thanksImage}></img>
                <h1 className="heading">Thank you!</h1>
                <p className="subheading">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </>
    );
};

export default Thanks;