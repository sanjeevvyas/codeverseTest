import adminRoutes from "./adminRoutes.js"
import bookRoutes from "./book.Routes.js"
import userRoutes from "./userRoutes.js"

const initRouter = (app) => {
    app.use('/admin', adminRoutes())
    app.use('/book', bookRoutes())
    app.use('/user', userRoutes())
}
export default initRouter