import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    //TODO
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" bold mb="s32" mt="s20">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}
