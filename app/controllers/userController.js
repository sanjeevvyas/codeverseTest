import userModel from "../models/userModel.js"
import JWT from 'jsonwebtoken'
import bcrypt, { compare } from 'bcrypt'
import bookModel from "../models/booksModel.js"

const userController = {

    login: async (req, res) => {
        try {
            let { email, password } = req.body
            const user = await userModel.findOne({ email: email })
            if (user && bcrypt.compare(user.password, password)) {

                const token = JWT.sign({ email: admin.email, }, '@#123')
                const rndInt = Math.floor(Math.random() * 6) + 1
                console.log("rndInt======>", rndInt)
                res.status(200).send({ satus: "200", msg: "Login successfully", token: token, otp: rndInt })
            } else {
                res.status(200).send({ satus: "200", msg: "Please check eamil and password", token: token })
            }

        } catch (err) {
            res.status(400).send({ satus: "400", msg: err, data: {} })
        }

    },

    registration: async (req, res) => {
        try {
            let payload = { ...req.body }
            let file = req.file
            payload.password = bcrypt.hash(payload.password, 8)
            const user = await userModel.findOne({ email: payload.email })
            if (user) {
                res.status(200).send({ satus: "200", msg: "user Already  Exist", data: {} })
            }
            user = new userModel(payload, { image: file.path })
            await user.save()
        } catch (err) {
            res.status(400).send({ satus: "400", msg: err, data: {} })
        }

    },

    bookList: async (req, res) => {
        try {
            let { page, pageSize, search } = req.query
            page = parseInt(page) ? page : 0
            pageSize = parseInt(pageSize) ? pageSize : 0
            let queryArg = {}
            if (search) {
                queryArg = { "$or": [{}] }
            }
            const book = await bookModel.find(queryArg).skip(1 - page * pageSize).limit(pageSize)


        } catch (err) {

        }



    }
}

export default userController