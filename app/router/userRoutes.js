import express from 'express'
import userController from '../controllers/userController.js'
import upload from '../config/multer.js'
const Routes = express.Router()

const userRoutes = () => {
    Routes.post('/login', userController.login)
    Routes.post('/registration', upload.single('file'), userController.registration)
    Routes.post('/book-list', userController.bookList)

    return Routes
}

export default userRoutes