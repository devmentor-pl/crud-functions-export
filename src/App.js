import { useState, useEffect } from 'react';
import './App.css';

import { get } from './catFactsProvider.js';
import useRandomCat from './useRandomCat';

function App() {
    const [catFact, setCatFact] = useState('');
    const cat = useRandomCat();

    useEffect(function () {
        get('/fact').then(function (resp) {
            setCatFact(resp.fact);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>{catFact}</p>
                <p>– {cat.breed} –</p>
            </header>
        </div>
    );
}

export default App;
