import {styled, css} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.space.fontMain}px;
  font-weight: 600;
  align-self: center;
  margin-top: 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.lightGray};
`;

export const FormContainer = styled.View`
  align-self: center;
  width: 80%;
`;

export const textStyle = css`
  color: ${({theme}) => theme.colors.darkGray};
  margin-top: 13px;
  align-self: center;
`;

export const SignupLink = styled.Text`
  text-decoration: underline;
`;

export const emailStyle = css`
  margin-top: 34px;
`;

export const passwordStyle = css`
  margin-top: 20px;
`;

export const loginButtonStyle = css`
  margin-top: 37px;
`;
