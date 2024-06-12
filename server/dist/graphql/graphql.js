import { ApolloServer } from "@apollo/server";
import { graphQLResolver } from "./resolvers/resolver.js";
import { graphQLSchema } from "./schema/schema.js";
// import { startStandaloneServer } from '@apollo/server/standalone';
export const connectGraphQL = () => {
    const server = new ApolloServer({
        typeDefs: graphQLSchema,
        resolvers: graphQLResolver
    });
    // startStandaloneServer(server, {
    //     listen: {
    //         port,
    //     }
    // }).then(() => {
    //     console.log(
    //         `Server is working on Port: ${port} in ${envMode} Mode`
    //     );
    // }).catch((err) => {
    //     console.log(err);
    // });
    return server;
};
