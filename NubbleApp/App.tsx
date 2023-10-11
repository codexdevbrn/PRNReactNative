import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/Theme';
import {TextInput} from './src/components/TextInput/TextInput';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" mb="s8">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box mb="s20">
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>
          <Text preset="paragraphSmall" color="primary" bold mb="s10">
            Esqueci minha senha
          </Text>
          <Button title="Entrar" mt="s40" />
          <Button preset="outline" title="Criar uma conta" mt="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
