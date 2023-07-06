import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyledSafeAreaView, Title} from './signup.styles';
import {AuthStackParamList} from '@navigation/auth-stack';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Signup'>;
}

export function Signup({navigation}: Props) {
  return (
    <StyledSafeAreaView>
      <Title onPress={() => navigation.navigate('Login')}>Signup</Title>
    </StyledSafeAreaView>
  );
}
