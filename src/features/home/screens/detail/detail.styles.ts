import Text from '@components/Text/Text';
import {Image} from 'expo-image';
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

export const ChartContainer = styled.View``;

export const ChatFilter = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 20px 0 20px;
`;
export const ChatFilterItem = styled.View`
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

export const chartFilterItemStyle = css`
  color: ${({theme}) => theme.colors.darkGray};
`;

export const ChatFilterItemText = styled(Text).attrs({
  customStyle: chartFilterItemStyle,
})`
  font-size: ${({theme}) => theme.space.fontMedium}px;
`;

export const ActiveItem = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.lightPurple};
  height: 35px;
  width: 35px;
  border-radius: 4px;
`;

export const InfoAndStats = styled.View`
  margin: 20px 20px 0 20px;
`;

export const InfoContainer = styled.View`
  margin-top: 11px;
`;

export const GroupInfoContainer = styled.View``;
export const GroupContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const FundBreakdown = styled.View`
  margin: 20px 20px 0 20px;
`;

export const FundBreakdownContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
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

export const activeItemStyle = css`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.space.fontMedium}px;
`;

export const fundBreakdownTitle = css`
  font-size: ${({theme}) => theme.space.fontMain}px;
  font-weight: 800;
`;

export const fundBreakdownText = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  font-weight: 800;
`;

export const highlighted = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  border-bottom-color: ${({theme}) => theme.colors.primary};
  border-bottom-width: 2px;
  font-weight: 800;
  padding-bottom: 9px;
`;

export const CardImage = styled(Image)`
  height: 106px;
  width: 220px;
`;

export const LogoImage = styled(Image)`
  height: 16px;
  width: 80px;
`;

export const CardContentContainer = styled.View`
  margin: 13px;
`;

export const cardStyle = css`
  margin: 18px 0;
  width: 220px;
`;

export const cardText = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  margin-top: 10px;
`;

export const readMore = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
  text-decoration: underline;
  margin-top: 10px;
`;

export const HighlightedCards = styled.ScrollView.attrs({
  horizontal: true,
})``;

export const highlightedCardSpacing = css`
  margin-left: 15px;
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
