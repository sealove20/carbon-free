import {styled, css} from 'styled-components/native';

export const HeaderContainer = styled.View`
  margin: 11px 20px 0 20px;
`;

export const Account = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Portifolio = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: 16px 0;
`;

export const PortifolioValueContainer = styled.View``;

export const PortifolioValue = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Percentage = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const Content = styled.ScrollView`
  margin: 20px 20px 0 20px;
`;

export const ChartsContainer = styled.ScrollView.attrs({
  horizontal: true,
})``;

export const CarbonCreditTip = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.primary};
  height: 105px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
`;

export const InvestCardContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {justifyContent: 'space-between'},
})`
  flex-direction: row;
  margin: 20px 0;
  border-radius: 10px;
`;

export const CarbonCreditTipContent = styled.View`
  margin: 10px;
`;

export const AccoutValueContainer = styled.View`
  flex-direction: row;
`;

export const LogoutContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const logoutText = css`
  color: ${({theme}) => theme.colors.primary};
`;

export const portifolioTitle = css`
  font-size: ${({theme}) => theme.space.fontXSmall}px;
`;

export const portifolioValue = css`
  font-size: ${({theme}) => theme.space.fontXLarge}px;
`;

export const portifolioPercentage = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.green};
`;

export const accountTextStyle = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
`;

export const funds = css`
  font-size: ${({theme}) => theme.space.fontMain}px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const homeCardStyle = css`
  margin-left: 15px;
`;

export const carbonCreditTipTitle = css`
  font-size: ${({theme}) => theme.space.fontMedium}px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.white};

  width: 150px;
`;

export const carbonCreditTipContent = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.white};
`;

export const investCardStyle = css`
  margin-left: 17px;
`;

export const investCardTitle = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  padding: 21px 0 0 12px;
  font-weight: 800;
`;
