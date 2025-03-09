import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler((req, res) => {
  //get user details from frontend
  //validation- not empty
  //check if user already exists- username.email
  //check for images
  //check for avatar
  //upload them to cloudinary, avatar check
  //create user object- create entry to db
  //remove password and refresh token field from response
  //check for user creation
  //return response
  const { username, email, fullName, password } = req.body;
  if (
    [username, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }
});

export { registerUser };
