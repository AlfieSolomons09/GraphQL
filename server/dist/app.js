import dotenv from 'dotenv';
import { connectDB } from './database/database.js';
import { connectGraphQL } from './graphql/graphql.js';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import morgan from 'morgan';
dotenv.config({ path: './.env', });
export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
const port = Number(process.env.PORT) || 3000;
const mongoUri = process.env.MONGO_URI;
connectDB(mongoUri);
const graphqlServer = connectGraphQL();
await graphqlServer.start();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));
app.use('/graphql', expressMiddleware(graphqlServer));
app.get('/', (req, res) => {
    res.send("Hello world!");
});
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "page not found"
    });
});
app.listen(port, () => {
    console.log(`Server is working on Port: ${port} in ${envMode} Mode`);
});
