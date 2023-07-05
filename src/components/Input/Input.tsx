import React from 'react';
import {View, Platform} from 'react-native';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {
  TextInput,
  Label,
  KeyboardAvoidingView,
  InputContainer,
} from './input.styles';

interface IInput {
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  label: string;
}

export function Input({value, onChangeText, placeholder, label}: IInput) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <InputContainer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
            />
          </View>
        </TouchableWithoutFeedback>
      </InputContainer>
    </KeyboardAvoidingView>
  );
}
