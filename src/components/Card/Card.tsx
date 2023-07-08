import {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {type RuleSet} from 'styled-components/native/dist/types';

import {CardContainer} from './card.styles';

interface Props {
  children?: ReactNode;
  customStyle?: RuleSet;
  onPress?: () => void;
}

export function Card({children, customStyle, onPress}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer customStyle={customStyle}>{children}</CardContainer>
    </TouchableOpacity>
  );
}
