import {combineReducers} from 'redux';
import heroes from './heroes_reducers.js';
import characters from './characters_reducers';


const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;