import React, {Component} from 'react';
import CharacterList from './characterList';
import HeroList from './herolist';
import '../styles/index.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="row">
                <div className="col-md-6">
                <CharacterList/>
                </div>
                <div className="col-md-6">
                <HeroList/>
                </div>
                </div>
            </div>
        )
    }
}

export default App;