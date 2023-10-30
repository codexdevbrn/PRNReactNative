import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {theme} from './src/theme/Theme';
import {Login} from './src/screens/login/Login';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
