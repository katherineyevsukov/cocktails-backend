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

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({ devMessage: err.message, stack: err.stack, prodMessage: 'sorry there was an error'})
  })
  
module.exports = server
