/* @flow */

import * as React from 'react';
import './Component.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

type Props = {||};

const Component: React.ComponentType<Props> = () => {
    return (
        <div className="button-container">
            <div className="button">
                <div className="button-icon">
                    <ArrowUpwardIcon />
                </div>
                <div className="button-label">Button 1</div>
            </div>
            <div className="button">
                <div className="button-icon">
                    <ArrowDownwardIcon />
                </div>
                <div className="button-label">Button 2</div>
            </div>
        </div>
    );
};

export default Component;
