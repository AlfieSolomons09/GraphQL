import { createUser, getAllUsers } from "../../controllers/user.js";
export const graphQLResolver = {
    Mutation: {
        newUser: createUser,
    },
    Query: {
        users: getAllUsers
    },
};
