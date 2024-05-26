import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../utils/API";

// user register
export const userRegister = createAsyncThunk(
  "auth/userRegister",
  async (data) => {
    try {
      const response = await API.post(`/auth/api/v1/register`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// user register
export const donorRegister = createAsyncThunk(
  "auth/donorRegister",
  async (data) => {
    try {
      const response = await API.post(`/auth/api/v1/register`, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// user login
export const userLogin = createAsyncThunk("auth/userLoin", async (data) => {
  try {
    const response = await API.post(`auth/api/v1/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// user logout
export const userLogout = createAsyncThunk("auth/userLogout", async (data) => {
  try {
    const response = await API.post(`/auth/api/v1/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get Login user

export const getLoginUser = createAsyncThunk("auth/getLoginUser", async () => {
  try {
    const response = await API.get(
      `/auth/api/v1/me`,

      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// change password
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (data) => {
    try {
      const response = await API.post(`/auth/api/v1/change-password`, data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//  profile photo update
export const profilePhotoUpdate = createAsyncThunk(
  "auth/profilePhotoUpdate",
  async (data) => {
    try {
      const response = await API.post(
        `/auth/api/v1/profile-photo-update`,
        data
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// export const profilePhotoUpdate = createAsyncThunk(
//   "auth/profilePhotoUpdate",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "/auth/api/v1/profile-photo-update",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message);
//     }
//   }
// );
