import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    // isAuthenticated: false,
    // token: null,
    // isValid: false,
    isLoading: false
  },

  reducers: {
    // isValidReducer: (state, action) => {
    //   state.isValid = action.payload
    // },
    isLoadingReducer: (state, action) => {
      state.isLoading = action.payload
    },
    // isAuthenticatedReducer: (state, action) => {
    //   state.isAuthenticated = action.payload
    //   window.localStorage.setItem('isAuthenticated', JSON.stringify(action.payload));
    // }
  },

})

export default authSlice.reducer;
export const { 
//   isValidReducer,
  isLoadingReducer,
//   isAuthenticatedReducer
} = authSlice.actions

