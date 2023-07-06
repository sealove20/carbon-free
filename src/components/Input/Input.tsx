import React from 'react';
import {View, Platform} from 'react-native';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {TextInput, KeyboardAvoidingView, InputContainer} from './input.styles';

interface IInput {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
}

export function Input({value, onChangeText, placeholder}: IInput) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <InputContainer>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
          />
        </InputContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
