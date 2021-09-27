/* @flow */

import usersListReducers from './Users/List/reducers';

const rootReducers = {
    usersListReducers: usersListReducers,
};

export type RootReducers = typeof rootReducers;

export default rootReducers;
