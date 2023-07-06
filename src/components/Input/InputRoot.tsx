import {ReactNode} from 'react';
import {RootContainer} from './input.styles';
import {type RuleSet} from 'styled-components/native/dist/types';

interface Props {
  children: ReactNode;
  customStyle?: RuleSet;
}

export function InputRoot({children, customStyle}: Props) {
  return <RootContainer customStyle={customStyle}>{children}</RootContainer>;
}
