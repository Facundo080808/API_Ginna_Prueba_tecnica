import dotenv from "dotenv";
dotenv.config();

export const enviromentVariables = {
  PORT: process.env.PORT || 3000,
  EMAIL_USER: process.env.USER_MAIL,
  EMAIL_PASS: process.env.PASSWORD_MAIL,
  SECRET_KEY: process.env.SECRET_KEY,
  MONGOURL:process.env.MONGODB_URI
};


