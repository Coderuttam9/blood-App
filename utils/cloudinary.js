import { v2 as cloudinary } from "cloudinary";

// configuration
cloudinary.config({
  cloud_name: "drljrmfps",
  api_key: "331347251741837",
  api_secret: "2Y5YjOwy3oaq8z4XG9TuU8LLD9U",
});

// file upload to cloud
// export const fileUploadToCloud = (path) => {
//   const data = cloudinary.uploader.upload(path);
//   return data;
// };
// file upload to cloud
export const fileUploadToCloud = async (path) => {
  try {
    const data = await cloudinary.uploader.upload(path);
    return data;
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
};

// file delete form cloud
export const fileDeleteFromCloud = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};
