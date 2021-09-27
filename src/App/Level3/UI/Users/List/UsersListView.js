/* @flow */

import UserView from './UserView';

export default class UsersListView {
    list: Array<UserView>;

    constructor(list: Array<UserView>) {
        this.list = list;

        Object.freeze(this);
    }
}
