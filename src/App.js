import React, { useState } from 'react';
// import Accordion from './components/Accordion/Accordion';
// import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
const App = () => {
    // const items = [
    //     {
    //         title: 'What is react?',
    //         content: 'React is an open-source JavaScript library for building user interfaces.',
    //     },
    //     {
    //         title: 'What is Angular?',
    //         content: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. '
    //     },
    //     {
    //         title: 'What is Vue?',
    //         content: 'Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.'
    //     }
    // ]
    const options = [
        {
            label: 'Red Color',
            value: 'red'
        },
        {
            label: 'Green Color',
            value: 'green'
        },
        {
            label: 'Blue Color',
            value: 'blue'
        },
    ]
    const [selection, setSelection] = useState('Select a color')
    return <div className="ui container"> <br />
        {/* <Accordion items={items} /> */}
        {/* <Search/> */}
        <Dropdown options={options} selection={selection} setSelection={setSelection} />
    </div>
};

export default App;