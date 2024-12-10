import bookModel from "../models/booksModel.js"
const bookController = {

    create: async (req, res) => {
        try {
            let payload = { ...req.body }
            const book = new bookModel(payload)
            await book.save()
            res.status(201).send({ satus: "201", msg: "Record inserted", data: book })

        } catch (err) {
            res.status(400).send({ satus: "400", msg: err, data: {} })
        }

    },
    list: async (req, res) => {
        try {
            
        } catch (err) {

        }

    },
    update: async (req, res) => {
        try {
            let { id } = req.query
            let { bookName, autherName, price, discription } = req.body
            const book = await bookModel.findOne({ _id: id })
            if (book) {
                book.bookName = bookName
                book.autherName = autherName
                book.price = price
                book.discription = discription
                book.save()
                res.status(200).send({ satus: "200", msg: "Record updated", data: book })
            } else {
                res.status(201).send({ satus: "200", msg: "book not available", data: {} })
            }
        } catch (err) {
            res.status(400).send({ satus: "400", msg: err, data: {} })

        }
    },
    delete: async (req, res) => {
        try {
            let { id } = req.params
            await bookModel.deleteOne({ _id: id })
            res.status(200).send({ satus: "200", msg: "Record deleted", data: {} })

        } catch (err) {
            res.status(400).send({ satus: "400", msg: err, data: {} })

        }


    }
}

export default bookController