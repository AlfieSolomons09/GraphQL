import { User } from "../models/userModel.js";
export const getAllUsers = async () => {
    const users = await User
        .find();
    console.log(users);
    return users;
};
export const createUser = async (_, args) => {
    const { name, email, password } = args;
    console.log(name, email, password);
    try {
        await User.create({ name, email, password });
        return "User Created Successfully";
    }
    catch (error) {
        console.error(error);
        throw new Error("Error creating user");
    }
};
