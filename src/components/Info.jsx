import React, { useEffect } from 'react';

const Info = (props) => {
    const handleName = (target) => {
        props.setName(target.value);
        checkValidation(target);
    }
    const handleEmail = (target) => {
        props.setEmail(target.value);
        checkValidation(target);
    }
    const handlePhone = (target) => {
        props.setPhone(target.value);
        checkValidation(target);
    }

    const checkValidation = (target) => {
        if (target.value == null || target.value.length == 0 || target.value == undefined) {
            target.required = true;
            document.getElementById(`required-${target.name}`).hidden = false;
        } else {
            target.required = false;
            document.getElementById(`required-${target.name}`).hidden = true;
        }
    }

    const buttonHandler = () => {
        let inputFields = document.querySelectorAll('#form-input');
        let valid = 0;
        inputFields.forEach(field => {
            if (field.value == null || field.value.length == 0 || field.value == undefined) {
                field.required = true;
                document.getElementById(`required-${field.name}`).hidden = false;
            } else {
                valid += 1;
            }
        })
        if (valid >= 3) {
            props.handleButtonClick('Plan')
        } else {
            return;
        }
    }

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
                <input id="form-input" type="text" onChange={e => handleName(e.target)} name="name" value={props.name} placeholder="e.g. Stephen King"></input>

                <div className="input-labels">    
                    <h2>
                        Email Address
                    </h2>
                    <h2 id="required-email" className="required-label" hidden>
                        This field is required
                    </h2>
                </div>
                <input id="form-input" type="email" onChange={e => handleEmail(e.target)} name="email" value={props.email} placeholder="e.g. stephenking@lorem.com"></input>

                <div className="input-labels">    
                    <h2>
                        Phone Number
                    </h2>
                    <h2 id="required-phone" className="required-label phone" hidden>
                        This field is required
                    </h2>
                </div>
                <input id="form-input" type="tel" onChange={e => handlePhone(e.target)} name="phone" value={props.phone} placeholder="e.g. +1 234 567 890"></input>
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

