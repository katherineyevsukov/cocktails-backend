const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const cocktailsRouter = require('./../api/models_routers/cocktails/cocktails-router')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/cocktails', cocktailsRouter)

server.get('/', (req, res, next) => {
    res.send('api is up and running!')
})

module.exports = server
