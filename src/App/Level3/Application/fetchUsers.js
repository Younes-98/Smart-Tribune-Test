/* @flow */

import FetchUsers from './Query/FetchUsers';
import usersFetched, { type UsersFetchedAction } from './Action/usersFetched';
import users from './users.json';

type Action = UsersFetchedAction;

export default (query: FetchUsers): Action => {
    const { page, perPage } = query;

    const startIndex = (page - 1) * perPage;

    return usersFetched(users.slice(startIndex, startIndex + perPage), {
        page: page,
        perPage: perPage,
        total: Math.ceil(users.length / perPage),
    });
};
