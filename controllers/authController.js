import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createOTP, isEmail, isMobile, textTOdot } from "../helpers/helpers.js";
import { sendMail } from "../mails/acconuntActiveMail.js";
import { sendSMS } from "../utils/activeVationOTP.js";
import { fileUploadToCloud } from "../utils/cloudinary.js";

/**
 * @description Create new user
 * @method POST
 * @route /api/v1/user/
 * @access public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, auth, password, role } = req.body;

  // validation
  if (!name || !auth || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // initialies opt
  let otp = createOTP();

  // check email or mobile
  let isAuthEmail = null;
  let isAuthMobile = null;

  // check valid email
  if (isEmail(auth)) {
    isAuthEmail = auth;

    // check email form data base
    const checkEmail = await User.findOne({ email: auth });

    if (checkEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
  } else if (isMobile(auth)) {
    isAuthMobile = auth;

    // check phone form data base
    const checkPhone = await User.findOne({ phone: auth });

    if (checkPhone) {
      return res.status(400).json({ message: "Phone number already exists" });
    }
  } else {
    return res.status(400).json({ message: "Invalid email or phone number" });
  }

  // Doing hassPassword
  const hashPass = await bcrypt.hash(password, 10);

  // create user data
  const user = await User.create({
    name,
    phone: isAuthMobile,
    email: isAuthEmail,
    password: hashPass,
    accessToken: otp,
    role: role,
  });

  // create jwt and set tocookie
  if (user) {
    const accessToken = jwt.sign(
      { auth },
      process.env.ACCOUT_ACCTIVATE_SECRET,
      {
        expiresIn: "15min",
      }
    );

    // set cookis to cookie storage
    res.cookie("acctivationToken", accessToken);

    // send opt to email or phone number
    if (isAuthEmail) {
      // send OTP
      await sendMail(auth, { code: otp, link: "" });
    } else if (isAuthMobile) {
      // send OTP
      await sendSMS(auth, `Hello ${name} Your activation OTP ${otp}`);
    }
  }

  // res to post man
  res
    .status(201)
    .send({ user: user, message: "User registration successfull" });
});

// user Acctivation by otp and accesstoke
/**
 * @description user activate
 * @method POST
 * @route /api/v1/user/activate-by-otp/:token
 * @access private
 * */
export const userAcctivation = asyncHandler(async (req, res) => {
  // get token and otp
  const { token } = req.params;
  const { otp } = req.body;

  // dot to text access token
  const accessToken = textTOdot(token);

  // verify access token
  const verifyToken = jwt.verify(
    accessToken,
    process.env.ACCOUT_ACCTIVATE_SECRET
  );
  // is not aviable
  if (!verifyToken) {
    return res.status(400).json({ message: "Invalid token" });
  }

  let isAcctivateUser = null;

  if (isEmail(verifyToken.auth)) {
    isAcctivateUser = await User.findOne({ email: verifyToken.auth });

    if (!isAcctivateUser) {
      return res.status(400).json({ message: "User email not  found" });
    }
  } else if (isMobile(verifyToken.auth)) {
    isAcctivateUser = await User.findOne({ phone: verifyToken.auth });

    if (!isAcctivateUser) {
      return res.status(400).json({ message: "user phone not  found" });
    }
  } else {
    return res.status(404).send({ message: "user account not found" });
  }

  // opt verify
  if (otp !== isAcctivateUser.accessToken) {
    return res.status(404).send({ message: "invalid OTP" });
  }

  // active user  data update
  (isAcctivateUser.isActivate = true), (isAcctivateUser.accessToken = null);
  isAcctivateUser.save();

  // clear cookie date
  res.clearCookie("accessToken");

  res.status(200).send({
    message: "user acctivation successfull",
  });
});

/***
 * @description user login
 * @mathod POST
 * @route /api/v1/user/login
 * @acess public
 */
export const useLogin = asyncHandler(async (req, res) => {
  const { auth, password } = req.body;

  // validation
  if (!auth) {
    return res.status(400).json({ message: "Emair or Phone is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  let isLogin = null;

  // check user form database
  if (isMobile(auth)) {
    // check auth phone number
    isLogin = await User.findOne({ phone: auth }).select("-possword");

    // if user phone not found
    if (!isLogin) {
      return res.status(400).json({ message: "user phone not found" });
    }
  } else if (isEmail(auth)) {
    // check auth email form database
    isLogin = await User.findOne({ email: auth });

    // if user email not found
    if (!isLogin) {
      return res.status(400).json({ message: "user email not found" });
    }
  }

  // chek password form database
  const Checkpassword = await bcrypt.compare(password, isLogin.password);

  //  check password
  if (!Checkpassword) {
    return res.status(400).json({ message: "incorrect password" });
  }

  // after login create jwt token
  const accessToken = jwt.sign(
    {
      auth,
    },
    process.env.ACCOUNT_LOGIN_SECRECT,
    {
      expiresIn: "365d",
    }
  );

  // set cookie the token
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.APP_ENV == "Develoment" ? false : true,
    expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    path: "/",
  });

  res.status(200).send({
    accessToken: accessToken,
    user: isLogin,
    message: "user login successfull",
  });
});

/***
 * @description user profile
 * @mathod GET
 * @route /api/v1/user/proFile
 * @access private
 */
export const getLoginUser = asyncHandler(async (req, res) => {
  if (!req.me) {
    return res.status(404).json({ message: "login user not found" });
  }
  return res.status(200).send({ auth: req.me });
});

/***
 * @description user Logout
 * @mathod GET
 * @router /api/v1/user/logout
 * @access private
 */

export const userLogout = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      sameSite: "strict",
    });
    res.status(200).send({ message: "user logged out successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error logging out user" });
  }
});

// change password

/***
 * @description user Logout
 * @mathod POST
 * @router /api/v1/user/change-password
 * @access private
 */

export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  console.log(req.body);
  if (!oldPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ message: " All filds are required" });
  }
  if (newPassword != confirmPassword) {
    return res.status(400).json({ message: "Confrim password not match" });
  }
  //  find the user form DB
  const user = await User.findById(req.me._id);

  // check the password from DB
  const checkPass = await bcrypt.compare(oldPassword, user.password);

  // if the password not match
  if (!checkPass) {
    return res.status(400).send({ message: "Old password not match" });
  }

  //  change password hass
  const hasPass = await bcrypt.hash(newPassword, 10);

  user.password = hasPass;
  user.save();
  res.status(200).send({ message: "Password change successfull" });
});

/***
 * @description user Logout
 * @mathod GET
 * @router /api/v1/user/logout
 * @access private
 */

export const profilePhotoUpdate = asyncHandler(async (req, res) => {

  try {

    const profileData = await fileUploadToCloud(req.file.path);
    console.log(profileData);
  } catch (error) {
    console.log(error.message);
  }
  const data = jwt.verify(
    req.cookies.accessToken,
    process.env.ACCOUNT_LOGIN_SECRECT
  );
  // const user = await findOne({ email: data.auth });
  // user.photo = profileData.secure_url;
  // user.save();

  res.status(200).json({ message: "profileData" });
});
// export const profilePhotoUpdate = asyncHandler(async (req, res) => {

//   try {
//     if (!req.file) {
//       res.status(400).json({ message: "No file uploaded" });
//       return;
//     }
//     const profileData = await fileUploadToCloud(req.file.path);
//     console.log(profileData);

//     res
//       .status(200)
//       .json({ message: "File uploaded successfully", data: profileData });
//   } catch (error) {
//     console.error("Upload Error:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });
