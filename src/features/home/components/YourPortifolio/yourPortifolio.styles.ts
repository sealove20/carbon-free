import {styled, css} from 'styled-components/native';

export const YourPortifolioContainer = styled.View`
  margin: 20px 20px 0 20px;
`;

export const YourPortifolioContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const YourPortifolioLastPurchased = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;

export const PortifolioValue = styled.View``;

export const Percentage = styled.View`
  flex-direction: row;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SellButton = styled.TouchableOpacity`
  height: 48px;
  width: 49%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.white};
  border-color: ${({theme}) => theme.colors.gray};
  elevation: 8;
`;

export const RetireCredits = styled.TouchableOpacity`
  height: 48px;
  width: 49%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.green};
  elevation: 8;
`;

export const portifolioValue = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
  font-weight: 800;
`;

export const sellButtonTextStyle = css`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.space.fontMedium}px;
`;

export const retireCreditsTextStyle = css`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.space.fontMedium}px;
`;

export const portifolioPercentage = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.green};
`;

export const fundYear = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
  font-weight: 800;
`;

export const lastPurchasedTextStyle = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  margin-right: 2px;
`;

export const previousRetiredText = css`
  font-size: ${({theme}) => theme.space.fontXXSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  margin-top: 15px;
`;
