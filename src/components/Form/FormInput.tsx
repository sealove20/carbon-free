import React from 'react';
import {Platform} from 'react-native';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {TextInput, KeyboardAvoidingView, InputContainer} from './form.styles';
import {type RuleSet} from 'styled-components/native/dist/types';

interface IInput {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  customStyle?: RuleSet;
  secureText?: boolean;
}

export function FormInput({
  value,
  onChangeText,
  placeholder,
  customStyle,
  secureText = false,
}: IInput) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <InputContainer customStyle={customStyle}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureText}
          />
        </InputContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
