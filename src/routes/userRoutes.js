const routerClient = require('express').Router()
const userController = require('../modules/user/controllers/userController')

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