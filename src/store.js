import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import filmsReducer from './ducks/filmsReducer';
import peopleReducer from './ducks/peopleReducer';

const multipleReducers = combineReducers({ filmsReducer, peopleReducer });

//what is middleware?
const middleware = applyMiddleware(promiseMiddleware());

const store = createStore(multipleReducers, middleware);

export default store;
