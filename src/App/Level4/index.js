/* @flow */

import * as React from 'react';

type Props = {||};

const Level4: React.ComponentType<Props> = () => {
    return (
        <div>
            <div>
                This is a command line level. You have to do the typing of the ./PictureListView.js
                file in this directory. In order to test your code, run :
            </div>
            <pre>$ make shell</pre>
            <pre>$ yarn flow</pre>
        </div>
    );
};

export default Level4;
