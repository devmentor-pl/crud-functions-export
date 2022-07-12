import { useState, useEffect } from 'react';
import { get } from './catFactsProvider';

const useRandomCat = () => {
    const [cat, setCat] = useState({});

    useEffect(function () {
        get('/breeds').then(resp => {
            const random =
                resp.data[Math.floor(Math.random() * resp.data.length)];
            setCat(random);
        });
    }, []);

    return cat;
};

export default useRandomCat;
