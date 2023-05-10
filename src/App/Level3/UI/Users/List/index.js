/* @flow */

import fetchUsers from '../../../Application/fetchUsers';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchUsers from '../../../Application/Query/FetchUsers';

type Props = {||};

const UsersList: React.ComponentType<Props> = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersListReducers.users);
    const [page, setPage] = React.useState(1);
    const [itemsPerPage, setItemsPerPage] = React.useState(5);

    const handlePrevPage = () => {
        setPage(page - 1);
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    React.useEffect(() => {
        dispatch(fetchUsers(new FetchUsers(page, itemsPerPage)));
    }, [dispatch, page, itemsPerPage]);

    return (
        <div className="nes-table-responsive">
            <table className="nes-table is-borderd is-centered">
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
                        <td>
                            <button disabled={page === 1} onClick={handlePrevPage}>
                                Prev page
                            </button>
                        </td>
                        <td colSpan={4}>
                            <button
                                onClick={handleNextPage}
                                disabled={!users || users.list.length < itemsPerPage}
                            >
                                Next page
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default UsersList;
