// dependencies
const express = require('express')
const mongoose = require('mongoose')

//configuration
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI) 
    console.log ('mongoose connection succesful')
const PORT = process.env.PORT
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.get('/', (req, res) => {
    res.json('This is a Book API')
})

//books route
const booksController = require("./controllers/books_controller.js")
app.use("/books", booksController)

//404
app.get('*', (req, res) => {
    res.json("404")
})

//listening
app.listen(PORT,() => {
    console.log('listening on port', PORT)
})