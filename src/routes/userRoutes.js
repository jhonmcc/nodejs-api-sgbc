const routerClient = require('express').Router()
const userMethods = require('../modules/user/controllers/userMethods')

routerClient.get('/', async (req, res) => {
    // const results = await userMethods.listar()
    res.send(
        'JSON.stringify()'
    )
})
routerClient.get('/:id', async (req, res) => {
    res.send(
        JSON.stringify(req.params.id)
    )
})
module.exports = routerClient