import adminModel from "../models/adminModels.js"
import JWT from 'jsonwebtoken'

const adminController = {

    login: async (req, res) => {
        try {
            let { email, password } = req.body
            const admin = await adminModel.findOne({ email: email, password: password })
            if (admin) {
                const token = JWT.sign({ email: admin.email, }, '@#123')
                res.status(200).send({ satus: "200", msg: "Login successfully", token: token })
            } else {
                res.status(200).send({ satus: "200", msg: "Please check eamil and password", token: token })
            }

        } catch (err) {
            res.status(400).send({ satus: "400", msg: err, data: {} })
        }

    }
}

export default adminController