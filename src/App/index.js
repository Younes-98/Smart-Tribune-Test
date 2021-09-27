// @flow

import * as React from 'react';
import {
    createTheme as createMuiTheme,
    ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import themeToMui from './themeToMui';
import theme from './theme.json';
import Levels from './Levels';

type Props = {|
    store: any, // flowlint-line unclear-type:warn
|};

const App: React.ComponentType<Props> = ({ store }) => {
    const muiTheme = React.useMemo(() => {
        return createMuiTheme(themeToMui(theme));
    }, []);

    // eslint-disable-next-line no-console
    console.log('[THEME][Styled]', theme);
    // eslint-disable-next-line no-console
    console.log('[THEME][Material]', muiTheme);

    return (
        <MuiThemeProvider theme={muiTheme}>
            <StyledComponentsThemeProvider theme={theme}>
                <Levels store={store} />
            </StyledComponentsThemeProvider>
        </MuiThemeProvider>
    );
};

export default App;
