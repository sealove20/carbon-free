import {styled} from 'styled-components/native';
import {type RuleSet} from 'styled-components/native/dist/types';

interface RootContainerProps {
  customStyle?: RuleSet;
}

export const RootContainer = styled.View<RootContainerProps>`
  width: 100%;
  ${(props) => props.customStyle}
`;

export const TextInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray,
}))`
  height: 48px;
  padding: 0 10px;
  color: ${({theme}) => theme.colors.gray};
  font-size: ${({theme}) => theme.space.fontSmall}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const InputContainer = styled.View`
  background-color: ${({theme}) => theme.colors.lightGray};
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
