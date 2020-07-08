import React, { useState } from 'react';

const Dropdown = ({ options, selection, setSelection }) => {
    const [toggle, setToggle] = useState(false);

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
        <div className="ui form">
            <div className="field">
                <div onClick={() => setToggle(!toggle)} className="ui selection dropdown">
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
{/* <select class="ui dropdown">
    <option value="">Gender</option>
    <option value="1">Male</option>
    <option value="0">Female</option>
</select> */}