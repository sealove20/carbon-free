import {styled} from 'styled-components/native';
import {type RuleSet} from 'styled-components/native/dist/types';

interface CustomStyleProps {
  customStyle?: RuleSet;
}

export const RootContainer = styled.View<CustomStyleProps>`
  width: 100%;
  ${(props) => props.customStyle}
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray,
}))`
  height: 48px;
  padding: 0 10px;
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.space.fontSmall}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const InputContainer = styled.View<CustomStyleProps>`
  background-color: ${({theme}) => theme.colors.lightGray};
  ${(props) => props.customStyle}
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView``;

export const Label = styled.Text`
  align-self: flex-start;
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.darkGray};
`;

export const Icon = styled.View`
  padding-right: 12px;
`;
