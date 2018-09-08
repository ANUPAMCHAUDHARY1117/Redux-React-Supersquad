import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {addCharacterById} from './actions';

const store = createStore(rootReducer);



ReactDOM.render(
    <Provider store={store}><App/></Provider>
    , document.getElementById('root')
)

