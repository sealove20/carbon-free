import {styled} from 'styled-components/native';
import {type RuleSet} from 'styled-components/native/dist/types';

interface InvestCardContainerProps {
  customStyle?: RuleSet;
}

export const InvestCardContainer = styled.View<InvestCardContainerProps>`
  background-color: ${({theme}) => theme.colors.lightGray};
  height: 200px;
  width: 160px;
  ${(props) => props.customStyle}
`;
