export const graphQLSchema = `#graphql

type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
}


type SampleUser{
    name: String!
    email: String!
    password: String!
}

type Query{
    users: [User]
    sampleUser: User
}

type Mutation{
    newUser(name: String!, email: String!, password: String!): String!
}

`