/* //! Currently known bugs:
    - Personal Info form starts with Invalid field and "This field is required" text visible
    - Select plan does not save the previous state of the toggle button and text fields whenever the user goes back to the page
*/
/* //? Current To-Do:
    - Save plan data for use in the Summary
    - Add addons functionality and save addons data to be pushed to Summary
    - Add Summary functionality
*/

import React, { useState, useEffect } from 'react';
import Info from './Info';
import Addons from './Addons';
import Plan from './Plan';
import Summary from './Summary';
import Thanks from './Thanks';

const Form = () => {
    // Current Plan Data
    const [ pricing, setPricing ] = useState('monthly');
    const [ plan, setPlan ] = useState({})

    // Information Form Data
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');

    // Switch Tab Icon
    const [ currentTab, setCurrentTab ] = useState('Info');
    let tabs = document.querySelectorAll('.tab');
    useEffect(() => {
        tabs.forEach((tab) => {
            if (tab.id == currentTab) {
                tab.classList.add('selected-tab')
            } else {
                tab.classList.remove('selected-tab');
            }
        });
    }, [currentTab]);

    const handleButtonClick = (tab) => {
        setCurrentTab(tab);
        console.log(`You Clicked ${tab}`);
    }

    return (
        <main>
            <aside className="sidebar">
                <div className="sidebar-item">
                    <h1 id="Info" className="tab">1</h1>
                    <div>
                        <span>
                            Step 1
                        </span>
                        <h3>
                            Your info
                        </h3>
                    </div>
                </div>
                <div className="sidebar-item">
                    <h1 id="Plan" className="tab">2</h1>
                    <div>
                        <span>
                            Step 2
                        </span>
                        <h3>
                            Select plan
                        </h3>
                    </div>
                </div>
                <div className="sidebar-item">
                    <h1 id="Addons" className="tab">3</h1>
                    <div>
                        <span>
                            Step 3
                        </span>
                        <h3>
                            Add-ons
                        </h3>
                    </div>
                </div>
                <div className="sidebar-item">
                    <h1 id="Summary" className="tab">4</h1>
                    <div>
                        <span>
                            Step 4
                        </span>
                        <h3>
                            Summary
                        </h3>
                    </div>
                </div>
            </aside>
            <section id="page-components">
                {
                    { 
                        'Info': <Info 
                            handleButtonClick={handleButtonClick}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            phone={phone}
                            setPhone={setPhone}
                            />,
                        'Plan': <Plan 
                            handleButtonClick={handleButtonClick}
                            setPricing={setPricing}
                            pricing={pricing}
                            />,
                        'Addons': <Addons handleButtonClick={handleButtonClick}/>,
                        'Summary': <Summary handleButtonClick={handleButtonClick}/>,
                        'Thanks': <Thanks />
                    }[currentTab]
                }
            </section>
        </main>
    );
};

export default Form;