import { createSlice } from "@reduxjs/toolkit";
import {
  changePassword,
  donorRegister,
  getLoginUser,
  profilePhotoUpdate,
  userLogin,
  userLogout,
  userRegister,
} from "./authApiSilce";

// create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userLogin")
      ? JSON.parse(localStorage.getItem("userLogin"))
      : null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setStateEmty: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // patient register
      .addCase(userRegister.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      // Donor Register
      .addCase(donorRegister.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(donorRegister.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(donorRegister.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      // user login
      .addCase(userLogin.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.message = action.payload.message;
        localStorage.setItem("userLogin", JSON.stringify(action.payload.user));
      }) // user logout
      .addCase(userLogout.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload;
        state.user = null;
        state.message = action.payload.message;
        localStorage.removeItem("userLogin");
      }) // get login user
      .addCase(getLoginUser.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(getLoginUser.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
        state.user = null;
        localStorage.removeItem("userLogin");
      })
      .addCase(getLoginUser.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload.auth;
        state.message = action.payload.message;
        localStorage.setItem("userLogin", JSON.stringify(action.payload.auth));
      })
      // change password
      .addCase(changePassword.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      }) // profile photo update
      .addCase(profilePhotoUpdate.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(profilePhotoUpdate.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(profilePhotoUpdate.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      });
  },
});

// export selector
export const authSelect = (state) => state.auth;
// export action
export const { setStateEmty } = authSlice.actions;
// export default
export default authSlice.reducer;
