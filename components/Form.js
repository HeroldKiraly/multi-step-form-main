const Info = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

const Form = () => {
    return (
        <div>
            <Info />
            {/* <Plan />
            <Addons />
            <Summary /> */}
        </div>
    );
};

const container = document.getElementById('form-container-main');
const root = ReactDOM.createRoot(container);
root.render(<Form />);