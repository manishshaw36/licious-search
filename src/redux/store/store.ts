import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combineReducers from '../reducers/index';

let middleware;

if (process && process.env && (process.env.NODE_ENV === 'production')) {
    middleware = applyMiddleware(thunk);
} else {
    middleware = applyMiddleware(thunk, logger);
}

export default createStore(combineReducers, middleware);