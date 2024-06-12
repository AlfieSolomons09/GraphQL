import { gql } from "@apollo/client"


export const getUsers = gql(`
    query Query {
        users {
            name
        }
    }
`)

export const addUser = gql(`
mutation Mutation($name: String!, $email: String!, $password: String!) {
  newUser(name: $name, email: $email, password: $password)
}
`)