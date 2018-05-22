import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import filmsReducer from './ducks/filmsReducer';
import peopleReducer from './ducks/peopleReducer';
 
//creating the store here
//combineReducers allows for us to have multiple reducers and better organize our applciation
//applyMiddleware initializes our promiseMiddleware that you see in the reducers i.e. pending, fulfilled, and rejected

const store = createStore(combineReducers({filmsReducer, peopleReducer}),applyMiddleware(promiseMiddleware()));

//The store is used in index.js
export default store;

