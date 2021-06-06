const routesUser = require('express').Router()
const userController = require('../modules/user/controllers/userController')

// routerClient.get('/', async (req, res) => {
//     // const results = await userMethods.listar()
//     res.send(
//         'JSON.stringify()'
//     )
// })
routesUser.get('/:uuid', async (req, res) => {
    res.send(
        JSON.stringify(req.params.id)
    )
})
routesUser.get('/', async (req, res) => {
    await userController.find(req, res)
})
routesUser.post('/', async (req, res) => {
    await userController.create(req, res)
})
routesUser.put('/', async (req, res) => {
    await userController.update(req, res)
})
routesUser.delete('/', async (req, res) => {
    await userController.delete(req, res)
})
routesUser.post('/login', async (req, res, next) =>{
    await userController.login(req, res, next)    
})

module.exports = routesUser