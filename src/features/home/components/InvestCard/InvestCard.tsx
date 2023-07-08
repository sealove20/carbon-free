import {ReactNode} from 'react';
import {type RuleSet} from 'styled-components/native/dist/types';

import {InvestCardContainer} from './investCard.styles';

interface Props {
  children?: ReactNode;
  customStyle?: RuleSet;
}

export function InvestCard({children, customStyle}: Props) {
  return (
    <InvestCardContainer customStyle={customStyle}>
      {children}
    </InvestCardContainer>
  );
}
