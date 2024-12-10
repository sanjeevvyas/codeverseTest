import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import MongoConnect from './app/config/db.connect.js'
import initRouter from './app/router/index.js'
const PORT = 3032
const app = express()

app.use(cors({ "origin": "*" }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

MongoConnect()




initRouter(app)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})