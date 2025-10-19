import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, refreshToken } = req.body;

  if (fullName === "") {
    throw new ApiError("name can't be empty");
  }
});

export { registerUser };
