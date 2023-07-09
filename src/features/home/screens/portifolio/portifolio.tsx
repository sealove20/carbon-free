import {
  StyledSafeAreaView,
  Title,
} from '@features/auth/screens/login/login.styles';
import {PortifolioContainer, portifolioText} from './portifolio.styles';
import Text from '@components/Text/Text';

export function Portifolio() {
  return (
    <StyledSafeAreaView>
      <PortifolioContainer>
        <Title>Portifolio</Title>
        <Text customStyle={portifolioText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          eligendi ipsa nam nostrum odio praesentium doloremque, laboriosam
          inventore libero incidunt perferendis, unde similique recusandae
          deleniti maiores quasi placeat natus voluptas!
        </Text>
      </PortifolioContainer>
    </StyledSafeAreaView>
  );
}
