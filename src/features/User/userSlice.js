import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLoginLoading: false,
    hasLoginError: false,
    isSignupLoading: false,
    hasSignupError: false,
  },
  reducers: {
    getLoginUserFetch: (state) => {
      state.isLoginLoading = true;
      state.hasLoginError = false;
    },
    getLoginUserSuccess: (state, action) => {
      state.isLoginLoading = false;
      state.hasLoginError = false;
      state.user = action.payload;
    },
    getLoginUserFailure: (state) => {
      state.isLoginLoading = false;
      state.hasLoginError = true;
    },
    getSignupUserFetch: (state) => {
      state.isSignupLoading = true;
      state.hasSignupError = false;
    },
    getSignupUserSuccess: (state, action) => {
      state.isSignupLoading = true;
      state.hasSignupError = false;
      state.user = action.payload;
    },
    getSignupUserFailure: (state) => {
      state.isSignupLoading = false;
      state.hasSignupError = true;
    },
  },
});

export const {
  getLoginUserFetch,
  getLoginUserSuccess,
  getLoginUserFailure,
  getSignupUserFetch,
  getSignupUserSuccess,
  getSignupUserFailure,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsLoginLoading = (state) => state.user.isLoginLoading;
export const selectHasLoginError = (state) => state.user.hasLoginError;
export const selectIsSignupLoading = (state) => state.user.isSignupLoading;
export const selectHasSignupError = (state) => state.user.hasSignupError;

export default userSlice.reducer;
