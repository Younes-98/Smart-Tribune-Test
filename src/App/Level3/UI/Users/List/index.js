/* @flow */

import fetchUsers from '../../../Application/fetchUsers';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchUsers from '../../../Application/Query/FetchUsers';

type Props = {||};

const UsersList: React.ComponentType<Props> = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersListReducers.users);

    React.useEffect(() => {
        dispatch(fetchUsers(new FetchUsers(1, 5)));
    }, [dispatch]);

    return (
        <table>
            <tbody>
                {users &&
                    users.list.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                                <img alt={user.lastname} src={user.picture} />
                            </td>
                        </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Prev page</td>
                    <td>Next page</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default UsersList;
