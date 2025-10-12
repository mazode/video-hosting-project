import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file upload successful
    console.log("Upload Successful", response.url);
    return response;
  } catch (error) {
    // remove locally saved file
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
