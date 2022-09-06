import React from 'react';
import '../App.css';

import { get } from '../catFactsProvider.js';
import RandomCatBreed from './RandomCatBreed';

class App extends React.Component {
    state = { catFact: '' };

    componentDidMount = () => {
        get('/fact').then(resp => {
            this.setState({ catFact: resp.fact });
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>{this.state.catFact}</p>
                    <RandomCatBreed />
                </header>
            </div>
        );
    }
}

export default App;

