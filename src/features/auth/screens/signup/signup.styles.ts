import {styled} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme}) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.space.fontLarge}px;
  font-weight: bold;
`;
