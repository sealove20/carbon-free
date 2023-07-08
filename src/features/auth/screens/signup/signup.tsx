import Checkbox from 'expo-checkbox';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CheckboxContainer,
  FormContainer,
  StyledSafeAreaView,
  Title,
  privacyText,
} from './signup.styles';
import {AuthStackParamList} from '@navigation/auth-stack';
import {Header} from '@components/Header/Header';
import {
  InputContainer,
  SignupLink,
  emailStyle,
  loginButtonStyle,
  passwordStyle,
  textStyle,
} from '../login/login.styles';
import {Form} from '@components/Form';
import {Button} from '@components/Button/Button';
import Text from '@components/Text/Text';

interface Props {
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Signup'>;
}

export function Signup({navigation}: Props) {
  return (
    <StyledSafeAreaView>
      <Header />
      <Title>Create your account</Title>
      <FormContainer>
        <Form.Root customStyle={emailStyle}>
          <Form.Label label="First Name" />
          <Form.Input onChangeText={() => null} placeholder="Joe" value="" />
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="Last Name" />
          <InputContainer>
            <Form.Input
              onChangeText={() => null}
              placeholder="Smithh"
              value=""
            />
          </InputContainer>
        </Form.Root>
        <Form.Root customStyle={passwordStyle}>
          <Form.Label label="E-mail" />
          <InputContainer>
            <Form.Input
              onChangeText={() => null}
              placeholder="john@doe.com"
              value=""
            />
          </InputContainer>
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
        <CheckboxContainer>
          <Checkbox value={false} onValueChange={() => {}} />
          <Text customStyle={privacyText} size="fontXSmall">
            I am over 18 years of age and I have read and agree to the Terms of
            Service and Privacy policy.
          </Text>
        </CheckboxContainer>
        <Button
          title="Create account"
          onPress={() => null}
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
