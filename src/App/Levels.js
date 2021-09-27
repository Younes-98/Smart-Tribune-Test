// @flow

import * as React from 'react';
import { Button, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Level0 from './Level0';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';
import Level4 from './Level4';
import Level5 from './Level5';

const levels = [
    'Welcome!',
    "To test is to doubt... but it's better than not to test",
    'Bigger, Smaller, Greater, Stronger',
    'Pagination',
    'Typing',
    'Congratulations!',
];

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeader: {
        background: `linear-gradient(0deg, ${theme.palette.grey[100]} 0%, white 50%)`,
        color: theme.palette.primary.main,
    },
    cardContent: {
        flex: '1 1 0%',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundSize: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backgroundImage: 'url(https://fr.smart-tribune.com/wp-content/uploads/2021/02/logo.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
    },
    cardActions: {
        background: theme.palette.grey[100],
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

type Props = {|
    store: any, // flowlint-line unclear-type:warn
|};

const App: React.ComponentType<Props> = ({ store }) => {
    const classes = useStyles();
    const [selectedLevelIndex, setSelectedLevelIndex] = React.useState(0);

    React.useEffect(() => {
        const findCurrentLevelIndex = (): number => {
            const levelIndex = parseInt(
                new URLSearchParams(window.location.search).get('level'),
                10,
            );

            const level = typeof levelIndex === 'number' ? levels[levelIndex] : undefined;

            return typeof level === 'string' ? levelIndex : 0;
        };

        setSelectedLevelIndex(findCurrentLevelIndex());

        window.addEventListener('popstate', () => {
            setSelectedLevelIndex(findCurrentLevelIndex());
        });
    }, []);

    const currentLevel: string | void = React.useMemo(() => {
        return levels[selectedLevelIndex];
    }, [selectedLevelIndex]);

    const nextLevel: string | void = React.useMemo(() => {
        return levels[selectedLevelIndex + 1];
    }, [selectedLevelIndex]);

    const previousLevel: string | void = React.useMemo(() => {
        return levels[selectedLevelIndex - 1];
    }, [selectedLevelIndex]);

    const onGotoLevel = React.useCallback(
        (level: number) => () => {
            setSelectedLevelIndex(level);
            window.history.pushState(`SmartTribue #${level}`, '', `?level=${level}`);
        },
        [],
    );

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader}
                title={`Level ${selectedLevelIndex}`}
                subheader={currentLevel}
            />
            <CardContent className={classes.cardContent}>
                {selectedLevelIndex === 0 && <Level0 />}
                {selectedLevelIndex === 1 && <Level1 />}
                {selectedLevelIndex === 2 && <Level2 />}
                {selectedLevelIndex === 3 && <Level3 store={store} />}
                {selectedLevelIndex === 4 && <Level4 />}
                {selectedLevelIndex === 5 && <Level5 />}
            </CardContent>
            <CardActions className={classes.cardActions}>
                {previousLevel !== undefined ? (
                    <Button onClick={onGotoLevel(selectedLevelIndex - 1)}>
                        {`< Level ${selectedLevelIndex - 1}: ${previousLevel}`}
                    </Button>
                ) : (
                    <div />
                )}
                {nextLevel !== undefined ? (
                    <Button onClick={onGotoLevel(selectedLevelIndex + 1)} variant="contained">
                        {`> Level ${selectedLevelIndex + 1}: ${nextLevel}`}
                    </Button>
                ) : (
                    <div />
                )}
            </CardActions>
        </Card>
    );
};

export default App;
