import {setSignIn} from '@redux/slices/authSlice';
import {useDispatch} from 'react-redux';

export function useAuth() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
      isLoggedIn: true,
    };

    dispatch(setSignIn(user));
  };
  const handleLogout = () => {
    const user = {
      isLoggedIn: false,
    };

    dispatch(setSignIn(user));
  };
  return {handleLogin, handleLogout};
}
