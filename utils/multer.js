import multer from "multer";

// multer config
const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, "bin/");
  // },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.fieldname);
  },
});

// multer middlewares
export const userPhoto = multer({ storage }).single("userPhoto");
