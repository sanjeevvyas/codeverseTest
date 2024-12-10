import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true

    },
    age: {
        type: Number
    },
    phone: {
        type: Number
    },
    userName: {
        type: String,
        require: true
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        require: true
    }

}, { timestamps: true })

const userModel = mongoose.model('users', userSchema)

export default userModel