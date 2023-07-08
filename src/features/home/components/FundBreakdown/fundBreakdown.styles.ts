import {styled, css} from 'styled-components/native';
import {Image} from 'expo-image';

export const FundBreakdownContainer = styled.View`
  margin: 20px 20px 0 20px;
`;

export const FundBreakdownContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const HighlightedCards = styled.ScrollView.attrs({
  horizontal: true,
})``;

export const CardImage = styled(Image)`
  height: 106px;
  width: 220px;
`;

export const LogoImage = styled(Image)`
  height: 16px;
  width: 80px;
`;

export const fundBreakdownTitle = css`
  font-size: ${({theme}) => theme.space.fontMain}px;
  font-weight: 800;
`;

export const highlighted = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  border-bottom-color: ${({theme}) => theme.colors.primary};
  border-bottom-width: 2px;
  font-weight: 800;
  padding-bottom: 9px;
`;

export const fundBreakdownText = css`
  font-size: ${({theme}) => theme.space.fontSmall}px;
  color: ${({theme}) => theme.colors.darkGray};
  font-weight: 800;
`;

export const cardStyle = css`
  margin: 18px 0;
  width: 220px;
`;

export const CardContentContainer = styled.View`
  margin: 13px;
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

export const highlightedCardSpacing = css`
  margin-left: 15px;
`;
