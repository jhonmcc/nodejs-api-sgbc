const routesUser = require('express').Router()
const userController = require('../modules/user/controllers/userController')

// routerClient.get('/', async (req, res) => {
//     // const results = await userMethods.listar()
//     res.send(
//         'JSON.stringify()'
//     )
// })
routesUser.get('/:id', async (req, res) => {
    res.send(
        JSON.stringify(req.params.id)
    )
})
routesUser.post('/', async (req, res) => {
    await userController.create(req, res)
})


module.exports = routesUser