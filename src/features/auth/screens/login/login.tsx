import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FormContainer,
  InputContainer,
  SignupLink,
  StyledSafeAreaView,
  Title,
  emailStyle,
  loginButtonStyle,
  passwordStyle,
  textStyle,
} from './login.styles';
import {Button} from '@components/Button/Button';
import {AuthStackParamList} from '@navigation/auth-stack';
import {Header} from '@components/Header/Header';
import {Form} from '@components/Input';
import Text from '@components/Text/Text';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}

export function Login({navigation}: Props) {
  return (
    <StyledSafeAreaView>
      <Header />
      <Title onPress={() => navigation.navigate('Signup')}>Login</Title>
      <FormContainer>
        <Form.Root customStyle={emailStyle}>
          <Form.Label label="E-mail" />
          <Form.Input
            onChangeText={() => null}
            placeholder="john@doe.com"
            value=""
          />
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="Password" />
          <InputContainer>
            <Form.Input
              onChangeText={() => null}
              placeholder="Minimum 8 characters"
              value=""
            />
            <Form.Icon name="eyeo" size={24} />
          </InputContainer>
        </Form.Root>
        <Button
          title="Login"
          onPress={() => null}
          customStyle={loginButtonStyle}
        />
        <Text customStyle={textStyle} size="fontXXSmall">
          Don't have an account?{' '}
          <SignupLink onPress={() => navigation.navigate('Signup')}>
            Sign up
          </SignupLink>{' '}
          here
        </Text>
      </FormContainer>
    </StyledSafeAreaView>
  );
}
