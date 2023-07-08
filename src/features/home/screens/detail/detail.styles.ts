import {styled, css} from 'styled-components/native';

export const HeaderContainer = styled.View`
  margin: 11px 20px 0 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 0;
`;

export const HeaderTitleContainer = styled.View``;

export const Content = styled.ScrollView`
  margin-top: 20px;
`;

export const PortifolioValueContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px 0 20px;
`;

export const PortifolioValue = styled.View``;

export const Percentage = styled.View`
  flex-direction: row;
`;

export const BuyButtonContainer = styled.View`
  margin: 20px;
`;

export const portifolioPercentage = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.green};
`;

export const fundTitle = css`
  font-size: ${({theme}) => theme.space.fontMain}px;
  font-weight: 800;
`;

export const fundAbreviation = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  text-align: center;
  color: ${({theme}) => theme.colors.darkGray};
`;

export const portifolioTitle = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
`;

export const portifolioValue = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
  font-weight: 800;
`;

export const fundYear = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
  font-weight: 800;
`;
