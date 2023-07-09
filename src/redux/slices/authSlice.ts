import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setSignOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export default authSlice.reducer;
