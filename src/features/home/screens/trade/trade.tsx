import {
  StyledSafeAreaView,
  Title,
} from '@features/auth/screens/login/login.styles';
import {TradeContainer} from './trade.styles';

export function Trade() {
  return (
    <StyledSafeAreaView>
      <TradeContainer>
        <Title>Trade</Title>
      </TradeContainer>
    </StyledSafeAreaView>
  );
}
