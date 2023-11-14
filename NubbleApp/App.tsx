import React from 'react';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from './src/theme/Theme';
import {SignUpScreen} from './src/screens/auth/SignUpScreen/SignUpScreen';
import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {/* <LoginScreen /> */}
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
