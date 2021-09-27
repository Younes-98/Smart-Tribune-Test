// @flow

import * as React from 'react';
import Component from './Component';

type Props = {||};

const Level1: React.ComponentType<Props> = () => {
    return (
        <div>
            <div>
                <div>
                    This is a command line level. In order to test your code you need to run the
                    following command in the terminal:
                </div>
                <pre>$ make shell</pre>
                <pre>$ yarn test</pre>
            </div>
            <Component />
        </div>
    );
};

export default Level1;
