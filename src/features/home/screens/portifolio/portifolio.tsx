import {
  StyledSafeAreaView,
  Title,
} from '@features/auth/screens/login/login.styles';
import {PortifolioContainer} from './portifolio.styles';

export function Portifolio() {
  return (
    <StyledSafeAreaView>
      <PortifolioContainer>
        <Title>Portifolio</Title>
      </PortifolioContainer>
    </StyledSafeAreaView>
  );
}
