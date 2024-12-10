import express from 'express'
import adminController from '../controllers/adminController.js'
 
const Routes = express.Router()

const adminRoutes = ()=>{
    Routes.post('/login',adminController.login)
    return Routes
}

export default adminRoutes