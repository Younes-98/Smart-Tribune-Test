/* @flow */

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import levle3RootReducers from './App/Level3/UI/rootReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [createLogger()];

export default () => {
    const store = createStore(
        combineReducers({ ...levle3RootReducers }),
        undefined,
        composeEnhancers(applyMiddleware(...middlewares)),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        // $FlowFixMe
        module.hot.accept('./App/Level3/UI/rootReducers', () => {
            const nextRootReducer = require('./App/Level3/UI/rootReducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
