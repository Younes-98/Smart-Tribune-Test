/* @flow */

import type { UsersFetchedAction } from '../../../Application/Action/usersFetched';
import UserView from './UserView';
import UsersListView from './UsersListView';

export type State = {
    users: ?UsersListView,
};

type Action = UsersFetchedAction;

const initialState = {
    users: null,
};

export default (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'USERS_FETCHED':
            return {
                ...state,
                users: new UsersListView(
                    action.payload.map(
                        ({ id, email, name, picture }) =>
                            new UserView(id.value, email, name.first, name.last, picture.thumbnail),
                    ),
                ),
            };
        default:
            return state;
    }
};
