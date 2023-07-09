import Checkbox from 'expo-checkbox';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CheckboxContainer,
  FormContainer,
  StyledSafeAreaView,
  Title,
  privacyText,
} from './signup.styles';
import {AuthStackParamList} from '@navigation/authStack';
import {Header} from '@components/Header/Header';
import {
  InputContainer,
  SignupLink,
  emailStyle,
  loginButtonStyle,
  passwordPlaceholderStyle,
  passwordStyle,
  textStyle,
} from '../login/login.styles';
import {Form} from '@components/Form';
import {Button} from '@components/Button/Button';
import Text from '@components/Text/Text';
import {useState} from 'react';
import {useAuth} from '@features/auth/hooks/useAuth';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Signup'>;
}

export function Signup({navigation}: Props) {
  const {handleLogin} = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  return (
    <StyledSafeAreaView>
      <Header />
      <Title>Create your account</Title>
      <FormContainer>
        <Form.Root customStyle={emailStyle}>
          <Form.Label label="First Name" />
          <Form.Input
            onChangeText={setFirstName}
            placeholder="Joe"
            value={firstName}
          />
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="Last Name" />
          <InputContainer>
            <Form.Input
              onChangeText={setLastName}
              placeholder="Smithh"
              value={lastName}
            />
          </InputContainer>
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="E-mail" />
          <InputContainer>
            <Form.Input
              onChangeText={setEmail}
              placeholder="john@doe.com"
              value={email}
            />
          </InputContainer>
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="Password" />
          <InputContainer>
            <Form.Input
              onChangeText={setPasswordValue}
              placeholder="Minimum 8 characters"
              value={passwordValue}
              secureText={isPasswordSecure}
              customStyle={passwordPlaceholderStyle}
            />
            <Form.Icon
              secureText={isPasswordSecure}
              onPress={setIsPasswordSecure}
            />
          </InputContainer>
        </Form.Root>
        <CheckboxContainer>
          <Checkbox value={privacy} onValueChange={setPrivacy} />
          <Text customStyle={privacyText} size="fontXSmall">
            I am over 18 years of age and I have read and agree to the Terms of
            Service and Privacy policy.
          </Text>
        </CheckboxContainer>
        <Button
          title="Create account"
          onPress={() => handleLogin()}
          customStyle={loginButtonStyle}
        />
        <Text customStyle={textStyle} size="fontXSmall">
          Already have an account?{' '}
          <SignupLink onPress={() => navigation.navigate('Login')}>
            Log in Here
          </SignupLink>
        </Text>
      </FormContainer>
    </StyledSafeAreaView>
  );
}
