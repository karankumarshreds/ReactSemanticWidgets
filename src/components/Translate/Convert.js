import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    useEffect(() => {
        const translate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });

            data && setTranslated(data.data.translations[0].translatedText);
        };
        const timer = setTimeout(translate, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [language, text]);
    return <h1 className="ui header">{translated}</h1>
};

export default Convert;