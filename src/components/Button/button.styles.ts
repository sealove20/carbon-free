import {styled, css} from 'styled-components/native';
import {type RuleSet} from 'styled-components/native/dist/types';

interface TouchableOpacityProps {
  customStyle?: RuleSet;
}

export const buttonFont = css`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
  height: 58px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px 32px;
  elevation: 8;
  ${(props) => props.customStyle}
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.white};
  ${buttonFont}
`;
