import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REDUX IMPORTS
import store from './store';
import {Provider} from 'react-redux';

//Put the Provider here, wrapping our App, this tells React to update when state changes in Redux
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

