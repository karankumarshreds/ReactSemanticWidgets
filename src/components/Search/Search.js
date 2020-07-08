import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };

        const identifier = setTimeout(() => {
            if (term) fetchData();
        }, 800);

        // this "FIRST of all the useEffect code" 
        // anytime the component RE-RENDERS!
        return () => {
            clearTimeout(identifier);
        }

    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div className="ui form container">
            <div className="field">
                <label>Search here</label>
                <input onChange={e => setTerm(e.target.value)}
                    value={term}
                    className="input" />
            </div>
            <div className="ui celled list"> {renderedResults}</div>
        </div>


    );
};

export default Search;