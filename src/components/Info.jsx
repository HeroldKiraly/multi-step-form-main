import React, { useEffect } from 'react';

const Info = (props) => {
    const handleName = (value) => {
        props.setName(value);
    }
    const handleEmail = (value) => {
        props.setEmail(value);
    }
    const handlePhone = (value) => {
        props.setPhone(value);
    }

    useEffect(() => {
        if (props.name != '') {
            document.getElementById('required-name').hidden = true;            
        } else {
            document.getElementById('required-name').hidden = false;            
        }
        if (props.email != '') {
            document.getElementById('required-email').hidden = true;            
        } else {
            document.getElementById('required-email').hidden = false;            
        }
        if (props.phone != '') {
            document.getElementById('required-phone').hidden = true;            
        } else {
            document.getElementById('required-phone').hidden = false;            
        }
        // if (props.phone != '' && props.email != '' && props.name != '') {
        //     document.getElementById('next-button-info').disabled = false;
        // }
        // else {
        //     document.getElementById('next-button-info').disabled = true;
        // }
    }, [props.name, props.email, props.phone]);

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
                    <h2 id="required-name" className="required-label" hidden>
                        This field is required
                    </h2>
                </div>
                <input onChange={e => handleName(e.target.value)} value={props.name} placeholder="e.g. Stephen King" required></input>

                <div className="input-labels">    
                    <h2>
                        Email Address
                    </h2>
                    <h2 id="required-email" className="required-label" hidden>
                        This field is required
                    </h2>
                </div>
                <input onChange={e => handleEmail(e.target.value)} value={props.email} placeholder="e.g. stephenking@lorem.com" required></input>

                <div className="input-labels">    
                    <h2>
                        Phone Number
                    </h2>
                    <h2 id="required-phone" className="required-label" hidden>
                        This field is required
                    </h2>
                </div>
                <input onChange={e => handlePhone(e.target.value)} value={props.phone} placeholder="e.g. +1 234 567 890" required></input>
            </div>

            <div className="buttons-container">
                <button className="back-button button-hidden" disabled>
                    Go back
                </button>
                <button id="next-button-info" className="next-button" onClick={() => props.handleButtonClick('Plan')}>
                    Next Step
                </button>
            </div>
        </>
    );
};

export default Info;

