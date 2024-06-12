import mongoose from "mongoose";


const schema = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, select: false}
})

export const User = mongoose.models.User || mongoose.model("User", schema) 