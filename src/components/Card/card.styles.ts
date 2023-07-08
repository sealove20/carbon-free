import {styled} from 'styled-components/native';
import {type RuleSet} from 'styled-components/native/dist/types';

interface CardContainerProps {
  customStyle?: RuleSet;
}

export const CardContainer = styled.View<CardContainerProps>`
  min-height: 165px;
  min-width: 170px;
  border: 1px solid ${({theme}) => theme.colors.lightGray};
  border-radius: 4px;
  ${(props) => props.customStyle}
`;
