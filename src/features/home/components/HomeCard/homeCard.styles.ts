import {styled, css} from 'styled-components/native';

interface cardPercentageProps {
  positive?: boolean;
}

export const HomeCardContainer = styled.View`
  margin: 12px;
`;

export const cardTitle = css`
  font-size: ${({theme}) => theme.space.fontXXSmall}px;
  font-weight: 800;
  margin: 5px 0 14px 0;
`;

export const CardContent = styled.View`
  flex-direction: row;
  margin-top: 14px;
`;

export const CardPercentageContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-left: 5px;
`;

export const cardPercentage = css<cardPercentageProps>`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${(props) =>
    props.positive ? props.theme.colors.green : props.theme.colors.red};
  margin-left: 5px;
`;

export const cardValue = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
`;
