const routerClient = require('express').Router()


routerClient.use('/', (req, res) => {
    res.send('OK')
})

module.exports = routerClient