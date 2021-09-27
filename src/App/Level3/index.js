/* @flow */

import * as React from 'react';
import UsersList from './UI/index';

type Props = {|
    store: any, // flowlint-line unclear-type:warn
|};

const Level3: React.ComponentType<Props> = ({ store }) => {
    return <UsersList store={store} />;
};

export default Level3;
