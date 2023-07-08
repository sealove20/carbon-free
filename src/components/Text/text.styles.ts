import {styled} from 'styled-components/native';
import {type RuleSet} from 'styled-components/native/dist/types';

interface BaseTextProps {
  size: string;
  customStyle?: RuleSet;
}

export const BaseText = styled.Text<BaseTextProps>`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme, size}) => theme.space[size]}px;
  font-family: ${({theme}) => theme.fonts.regular};
  ${(props) => props.customStyle}
`;
