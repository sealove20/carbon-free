import {styled} from 'styled-components/native';

export const HeaderContainer = styled.View`
  min-height: 100px;
  border-bottom-color: ${({theme}) => theme.colors.lightGray};
  border-bottom-width: 1px;
`;
