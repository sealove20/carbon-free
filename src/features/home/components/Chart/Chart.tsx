import DetailChart from '@features/home/assets/DetailChart';
import {
  ActiveItem,
  ChartContainer,
  ChatFilter,
  ChatFilterItem,
  ChatFilterItemText,
  activeItemStyle,
} from './chart.styles';
import Text from '@components/Text/Text';

export function Chart() {
  return (
    <ChartContainer>
      <DetailChart />
      <ChatFilter>
        <ChatFilterItem>
          <ChatFilterItemText>1h</ChatFilterItemText>
        </ChatFilterItem>
        <ActiveItem>
          <Text customStyle={activeItemStyle}>1d</Text>
        </ActiveItem>
        <ChatFilterItem>
          <ChatFilterItemText>1w</ChatFilterItemText>
        </ChatFilterItem>
        <ChatFilterItem>
          <ChatFilterItemText>1m</ChatFilterItemText>
        </ChatFilterItem>
        <ChatFilterItem>
          <ChatFilterItemText>1y</ChatFilterItemText>
        </ChatFilterItem>
        <ChatFilterItem>
          <ChatFilterItemText>all</ChatFilterItemText>
        </ChatFilterItem>
      </ChatFilter>
    </ChartContainer>
  );
}
