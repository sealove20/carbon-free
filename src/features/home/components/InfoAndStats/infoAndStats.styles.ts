import {styled, css} from 'styled-components/native';

export const InfoAndStatsContainer = styled.View`
  margin: 20px 20px 0 20px;
`;

export const GroupInfoContainer = styled.View``;

export const InfoLayoutContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  margin-top: 11px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const infoAndStatsTitle = css`
  font-size: ${({theme}) => theme.space.fontMain}px;
  font-weight: 800;
`;

export const infoTitle = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  margin-right: 2px;
`;

export const infoContent = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
`;
