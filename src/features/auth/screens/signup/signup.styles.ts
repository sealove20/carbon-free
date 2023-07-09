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

export const FormContainer = styled.ScrollView.attrs({
  contentContainerStyle: {},
})`
  align-self: center;
  width: 80%;
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 19px;
`;

export const HeaderContainer = styled.View`
  margin: 0 0 15px 25px;
  align-items: flex-start;
  justify-content: flex-end;
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity``;

export const privacyText = css`
  color: ${({theme}) => theme.colors.darkGray};
  width: 90%;
`;
