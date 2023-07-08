import {styled, css} from 'styled-components/native';
import Text from '@components/Text/Text';

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

export const activeItemStyle = css`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.space.fontMedium}px;
`;
