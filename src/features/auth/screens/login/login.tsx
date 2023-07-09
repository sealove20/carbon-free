import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  FormContainer,
  InputContainer,
  SignupLink,
  StyledSafeAreaView,
  Title,
  emailStyle,
  loginButtonStyle,
  passwordPlaceholderStyle,
  passwordStyle,
  textStyle,
} from './login.styles';
import {Button} from '@components/Button/Button';
import {AuthStackParamList} from '@navigation/auth-stack';
import {Header} from '@components/Header/Header';
import {Form} from '@components/Form';
import Text from '@components/Text/Text';
import {useState} from 'react';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login'>;
}

export function Login({navigation}: Props) {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <StyledSafeAreaView>
      <Header />
      <Title>Login</Title>
      <FormContainer>
        <Form.Root customStyle={emailStyle}>
          <Form.Label label="E-mail" />
          <Form.Input
            onChangeText={setLoginValue}
            placeholder="john@doe.com"
            value={loginValue}
          />
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="Password" />
          <InputContainer>
            <Form.Input
              onChangeText={setPasswordValue}
              placeholder="Minimum 8 characters"
              value={passwordValue}
              customStyle={passwordPlaceholderStyle}
              secureText={isPasswordSecure}
            />
            <Form.Icon
              secureText={isPasswordSecure}
              onPress={setIsPasswordSecure}
            />
          </InputContainer>
        </Form.Root>
        <Button
          title="Login"
          onPress={() => null}
          customStyle={loginButtonStyle}
        />
        <Text customStyle={textStyle} size="fontXSmall">
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
