import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components/Text/Text';
import {Box} from '../../components/Box/Box';
import {TextInput} from '../../components/TextInput/TextInput';
import {Button} from '../../components/Button/Button';

export function Login() {
  return (
    <View style={{paddingHorizontal: 24, marginTop: 20}}>
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
  );
}
