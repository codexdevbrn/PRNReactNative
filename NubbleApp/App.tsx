import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/Theme';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Icon name="eyeOn" color="carrotSecondary" />
          <Icon name="eyeOff" />
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button title="Entrar" marginBottom="s16" />
          <Button preset="outline" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
