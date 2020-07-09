import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selection, setSelection }) => {
    const [toggle, setToggle] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) {
                // if user clicks on the component itself
                return;
            };
            // if user clicks outside of component
            setToggle(false);
        }
        document.body.addEventListener('click', onBodyClick);
        // clean up function, runs when before useEffect 
        // also runs when the component is stopped from showing
        return () => {
            // we will stop the above event listener
            document.body.removeEventListener('click', onBodyClick);
        };

    }, []);

    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value}
                className="item"
                onClick={() => setSelection(option.label)}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <div onClick={() => {
                    setToggle(!toggle);
                }} className={`ui selection dropdown ${toggle ? 'visible' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text" >{selection}</div>
                    <div className={`menu transition ${toggle ? 'visible' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dropdown;
