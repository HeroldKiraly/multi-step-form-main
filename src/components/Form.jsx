import Info from './Info';
import Addons from './Addons';
import Plan from './Plan';
import Summary from './Summary';

const Form = () => {
    return (
        <>
            Step 1
            Your info

            Step 2
            Select plan

            Step 3
            Add-ons

            Step 4
            Summary

            <Info />
            <Plan />
            <Addons />
            <Summary />
        </>
    );
};

export default Form;