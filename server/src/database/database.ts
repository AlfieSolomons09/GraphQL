import mongoose from "mongoose";

export const connectDB = (uri: string) => {
    mongoose.connect(uri, {
        dbName: "graphql"
    }).then(c=>{
        console.log(`Connected with ${c.connection.name}`)
    }).catch(e=>{
        console.log(e)
    })
}