import express from "express";
import { tokenVerify } from "../middlewares/tokenVerify.js";

import {
  useLogin,
  registerUser,
  userLogout,
  userAcctivation,
  changePassword,
  getLoginUser,
  profilePhotoUpdate,
} from "../controllers/authController.js";
import { userPhoto } from "../utils/multer.js";

// init router form express
const router = express.Router();

// routing
router.post("/login", useLogin);
router.post("/register", registerUser);
router.post("/Account-activate-by-otp/:token", userAcctivation);
router.get("/me", tokenVerify, getLoginUser);
router.post("/logout", userLogout);
router.post("/change-password", tokenVerify, changePassword);
router.post("/profile-photo-update", userPhoto, profilePhotoUpdate);

// export default
export default router;
