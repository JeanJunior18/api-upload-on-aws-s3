require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true, useUnifiedTopology:true})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(3333, console.log('Runnig'))
