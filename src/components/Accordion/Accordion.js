import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [index, setIndex] = useState(null);

    const onClick = (indx) => {
        if (indx === index) setIndex(null);
        else setIndex(indx);
    };

    return (
        <div className="ui styled accordion">
            {items.map((item, indx) => {
                const active = indx === index ? 'active' : '';
                return (
                    <React.Fragment key={item.title}>
                        <div className={`title ${active}`} onClick={() => { onClick(indx) }}>
                            <i className="dropdown icon"></i>

                            {item.title}

                        </div>
                        <div className={`content ${active}`}>
                            {item.content}
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    );
};

export default Accordion;