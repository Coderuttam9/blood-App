import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import asynceHandler from "express-async-handler";

import { isEmail, isMobile } from "../helpers/helpers.js";
import User from "../models/User.js";

// crate verify token  middleware
export const tokenVerify = async (req, res, next) => {
  //  get access token from cookie
  const { accessToken } = req.cookies;

  // check token
  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthenticated access token",
    });
  }

  //   tokenVerify
  const token = jwt.verify(
    accessToken,
    process.env.ACCOUNT_LOGIN_SECRECT,
    asynceHandler(async (error, decode) => {
      if (error) {
        console.log(error);
        return res.status(404).send({ message: "Invalid token" });
      }

      let me = null;
      if (isMobile(decode.auth)) {
        me = await User.findOne({ phone: decode.auth }).select("-possword");
      } else if (isEmail(decode.auth)) {
        me = await User.findOne({ email: decode.auth }).select("-password");
      }

      req.me = me;
      next();
    })
  );
};
