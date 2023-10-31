import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components/Text/Text';
import {TextInput} from '../../components/TextInput/TextInput';
import {Button} from '../../components/Button/Button';
import {Icon} from '../../components/Icon/Icon';

export function Login() {
  return (
    <View style={{paddingHorizontal: 24}}>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        errorMessage="Mensagem de erro"
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon name="eyeOn" />}
        boxProps={{mb: 's10'}}
      />
      <Text preset="paragraphSmall" color="primary" bold>
        Esqueci minha senha
      </Text>
      <Button title="Entrar" mt="s40" />
      <Button preset="outline" title="Criar uma conta" mt="s12" />
    </View>
  );
}
