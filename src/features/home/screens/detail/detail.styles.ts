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

export const YourPortifolioContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const YourPortifolioLastPurchased = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
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

export const sellButtonTextStyle = css`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.space.fontMedium}px;
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

export const retireCreditsTextStyle = css`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.space.fontMedium}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const previousRetiredText = css`
  font-size: ${({theme}) => theme.space.fontXXSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  margin-top: 15px;
`;

export const Percentage = styled.View`
  flex-direction: row;
`;

export const PortifolioValue = styled.View``;

export const portifolioValue = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
  font-weight: 800;
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

export const portifolioPercentage = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.green};
`;

export const fundYear = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
  font-weight: 800;
`;

export const YourPortifolio = styled.View`
  margin: 20px 20px 0 20px;
`;

export const TipNotes = styled.View`
  background-color: ${({theme}) => theme.colors.lightGray};
  margin: 20px 20px 0 20px;
  padding: 10px;
`;

export const tipNotesText = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  text-align: justify;
`;

export const tipNotesTextInformation = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  text-align: justify;
  margin-top: 10px;
`;

export const BuyButtonContainer = styled.View`
  margin: 20px;
`;

export const lastPurchasedTextStyle = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  margin-right: 2px;
`;
