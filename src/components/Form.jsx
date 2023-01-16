import Info from './Info';
import Addons from './Addons';
import Plan from './Plan';
import Summary from './Summary';
import Thanks from './Thanks';

const Form = () => {
    return (
        <>
            <main>
                <aside className="sidebar">
                    <div className="sidebar-item">
                        <h1>1</h1>
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
                        <h1>2</h1>
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
                        <h1>3</h1>
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
                        <h1>4</h1>
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
                <section>
                    {/* <Info /> */}
                    {/* <Plan /> */}
                    {/* <Addons /> */}
                    {/* <Summary /> */}
                    <Thanks />
                </section>
            </main>
        </>
    );
};

export default Form;