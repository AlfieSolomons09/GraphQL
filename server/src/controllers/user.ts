import { User } from "../models/userModel.js";

export const getAllUsers = async () => {
  const users = await User
    .find();
  console.log(users)
  return users
}

type SampleUser = {
  name: string
  email: string
  password: string
}

export const createUser = async (_: any, args: SampleUser) => {
  const { name, email, password } = args
  console.log(name, email, password)
  try {
    await User.create({ name, email, password });
    return "User Created Successfully";
  } catch (error) {
    console.error(error);
    throw new Error("Error creating user");
  }
}