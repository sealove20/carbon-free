import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FormContainer,
  InputContainer,
  StyledSafeAreaView,
  Title,
} from './login.styles';
import {Button} from '@components/Button/Button';
import {AuthStackParamList} from '@navigation/auth-stack';
import {Header} from '@components/Header/Header';
import {Form} from '@components/Input';

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
        <Button title="Login" onPress={() => null} />
      </FormContainer>
    </StyledSafeAreaView>
  );
}
