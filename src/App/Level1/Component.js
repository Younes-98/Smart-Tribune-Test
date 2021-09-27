// @flow

import { Button, Grid } from '@mui/material';
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
        <Grid>
            <Grid container spacing={1} alignItems="center">
                <Grid item>Comparison between</Grid>
                <Grid item>
                    <input type="number" onChange={onChangeInput1} />
                </Grid>
                <Grid item>and</Grid>
                <Grid item>
                    <input type="number" onChange={onChangeInput2} />
                </Grid>
                <Grid item>
                    <Button onClick={onCompare} variant="outlined" size="small">
                        Click to compare
                    </Button>
                </Grid>
            </Grid>
            <p>{result}</p>
        </Grid>
    );
};

export default Component;
