// @flow

import { Grid } from '@mui/material';
import * as React from 'react';
import MathView from './MathView';

type Props = {||};

const Component: React.ComponentType<Props> = () => {
    const [input1, setInput1] = React.useState(0);
    const [input2, setInput2] = React.useState(0);
    const [result, setResult] = React.useState('');

    const onChangeInput1 = React.useCallback((event) => {
        setInput1(parseInt(event.target.value, 10));
        setResult('');
    }, []);

    const onChangeInput2 = React.useCallback((event) => {
        setInput2(parseInt(event.target.value, 10));
        setResult('');
    }, []);

    const onCompare = React.useCallback(() => {
        const mv = new MathView(input1);

        if (mv.isGreaterThan(input2)) {
            setResult(`${input1} is greater than ${input2}`);
        } else if (mv.isLessThan(input2)) {
            setResult(`${input1} is lesser than ${input2}`);
        } else if (mv.isEqualTo(input2)) {
            setResult(`${input1} is equal to ${input2}`);
        }
    }, [input1, input2]);

    return (
        <Grid container direction={'column'} spacing={5}>
            <Grid item>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <label htmlFor="Input 1">Comparison between</label>
                    </Grid>
                    <Grid item>
                        <input
                            id="Input 1"
                            type="number"
                            onChange={onChangeInput1}
                            className={'nes-input'}
                        />
                    </Grid>
                    <Grid item>
                        <label htmlFor="Input 2">and</label>
                    </Grid>
                    <Grid item>
                        <input
                            id="Input 2"
                            type="number"
                            onChange={onChangeInput2}
                            className={'nes-input'}
                        />
                    </Grid>
                    <Grid item>
                        <button onClick={onCompare} className={'nes-btn is-success'}>
                            Click to compare
                        </button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <div className="nes-container with-title is-centered">
                    <p className="title">Result</p>
                    <p>{result}</p>
                </div>
            </Grid>
        </Grid>
    );
};

export default Component;
