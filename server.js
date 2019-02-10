const express = require('express')
//const hbs = require('express-handlebars')
const path = require('path')
const cors = require('cors')

const userRoutes = require('./routes/dinnerMenu')

const server = express()

// Middleware

//server.engine('hbs', hbs({extname: 'hbs'}))
//server.set('view engine', 'hbs')
server.use(express.json())
server.use(cors({origin:'http://localhost:8080'}))
//server.use(express.urlencoded({extended: true}))
server.use(express.static(path.join(__dirname,'public')))
// Routes

server.use('/api/v1', userRoutes)

module.exports = server
