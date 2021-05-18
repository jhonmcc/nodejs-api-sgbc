const routerClient = require('express').Router()
const userMethods = require('../modules/user/userMethods')

routerClient.use('/', async (req, res) => {
    const results = await userMethods.listar()
    res.send(
        JSON.stringify(results)
    )
})

module.exports = routerClient