import React from 'react';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {theme} from './src/theme/Theme';
import {LoginScreen} from './src/screens/auth/login/LoginScreen';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
