import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDiNARY_CLOUD_NAM,
  api_key: process.env.CLOUDiNARY_API_KEY,
  api_secret: process.env.CLOUDiNARY_API_SECRET,
});

export default cloudinary;
