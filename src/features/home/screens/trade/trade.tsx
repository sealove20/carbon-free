import {
  StyledSafeAreaView,
  Title,
} from '@features/auth/screens/login/login.styles';
import {TradeContainer, tradeText} from './trade.styles';
import Text from '@components/Text/Text';

export function Trade() {
  return (
    <StyledSafeAreaView>
      <TradeContainer>
        <Title>Trade</Title>
        <Text customStyle={tradeText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          vitae ratione temporibus magnam necessitatibus tempora rerum culpa
          assumenda neque ducimus! Maxime non dolore quasi nesciunt qui placeat
          esse. Dolorem, itaque.
        </Text>
      </TradeContainer>
    </StyledSafeAreaView>
  );
}
