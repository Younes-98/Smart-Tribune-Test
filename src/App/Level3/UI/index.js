/* @flow */

import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Users from './Users';

type Props = {|
    store: any, // flowlint-line unclear-type:warn
|};

const App: React.ComponentType<Props> = ({ store }) => {
    return (
        <ReduxProvider store={store}>
            <Users />
        </ReduxProvider>
    );
};

export default App;
