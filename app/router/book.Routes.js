import express from 'express'
import bookController from '../controllers/bookController.js'
import auth from '../config/auth.js'
const Routes = express.Router()

const bookRoutes = () => {
    Routes.post('/create', auth, bookController.create)
    Routes.put('/update', auth, bookController.update)
    Routes.get('/list', auth, bookController.list)
    Routes.delete('/delete/:id', auth, bookController.delete)
    return Routes
}

export default bookRoutes