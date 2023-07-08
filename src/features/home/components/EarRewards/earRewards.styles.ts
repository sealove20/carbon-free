import {styled, css} from 'styled-components/native';

export const EarnRewardsContainer = styled.View`
  background-color: ${({theme}) => theme.colors.lightPurple};
  flex-direction: row;
  align-items: center;
  width: 110px;
  border-radius: 4px;
  padding: 8px;
`;

export const earnText = css`
  font-size: ${({theme}) => theme.space.fontXXSmall}px;
  color: ${({theme}) => theme.colors.primary};
  margin-left: 4px;
`;
