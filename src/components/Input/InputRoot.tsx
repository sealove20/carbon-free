import {ReactNode} from 'react';
import {RootContainer} from './input.styles';

interface Props {
  children: ReactNode;
}

export function InputRoot({children}: Props) {
  return <RootContainer>{children}</RootContainer>;
}
