/* @flow */

import * as React from 'react';
import { Grid } from '@mui/material';

type Props = {||};

const Level5: React.ComponentType<Props> = () => {
    return (
        <Grid container direction={'column'}>
            <Grid item>
                <i class="nes-octocat animate"></i>
            </Grid>
            <Grid item>
                <a href={'/#'} className="nes-badge">
                    <span className={'is-success'}>Congrats!</span>
                </a>
            </Grid>

            <Grid item>
                <div>You can now open a PR on our repo and ask for review !</div>
            </Grid>
        </Grid>
    );
};

export default Level5;
