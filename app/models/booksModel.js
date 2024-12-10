import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String
    },
    autherName: {
        type: String
    },
    price: {
        type: Number
    },
    discription: {
        type: String
    }

}, { timestamps: true })

const bookModel = mongoose.model('books', BookSchema)

export default bookModel