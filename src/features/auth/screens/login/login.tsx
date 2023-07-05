import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FormContainer,
  InputContainer,
  StyledSafeAreaView,
  Title,
} from './login.styles';
import {AuthStackParamList} from '../../../../navigation/auth-stack';
import {Form} from '../../../../components/Input';
import {Header} from '../../../../components/Header/Header';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}

export function Login({navigation}: Props) {
  return (
    <StyledSafeAreaView>
      <Header />
      <Title onPress={() => navigation.navigate('Signup')}>Login</Title>
      <FormContainer>
        <Form.Root>
          <Form.Label label="E-mail" />
          <Form.Input
            onChangeText={() => null}
            placeholder="john@doe.com"
            value=""
            label="E-mail"
          />
        </Form.Root>
        <Form.Root>
          <Form.Label label="Password" />
          <InputContainer>
            <Form.Input
              onChangeText={() => null}
              placeholder="Minimum 8 characters"
              value=""
              label="Password"
            />
            <Form.Icon name="eyeo" size={24} />
          </InputContainer>
        </Form.Root>
      </FormContainer>
    </StyledSafeAreaView>
  );
}
