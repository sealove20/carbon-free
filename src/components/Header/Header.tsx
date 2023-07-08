import {ReactNode} from 'react';
import {HeaderContainer} from './header.styles';

interface Props {
  children?: ReactNode;
}

export function Header({children}: Props) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
