import {styled} from 'styled-components/native';
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
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.lightGray};
`;

export const FormContainer = styled.View`
  align-self: center;
  width: 80%;
  /* margin-left: 25px; */
  /* background-color: red; */
`;
