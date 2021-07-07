const routesUser = require('express').Router()
const userController = require('../modules/user/controllers/userController')

// routesUser.use('/', async (req, res) => {
//     // const results = await userMethods.listar()
//     res.send(
//         'index user'
//     )
// })
// routesUser.get('/:uuid', async (req, res) => {
//     res.send(
//         JSON.stringify(req.query.id)
//     )
// })
routesUser.get('/all', async (req, res) => {
    // await userController.verifyToken(req, res)
    await userController.findAll(req, res)
})
// routesUser.get('/all/:limit', async (req, res) => {
//     // await userController.verifyToken(req, res)
//     res.send(req.query.limit)
//     // await userController.findAll(req, res)
// })
routesUser.post('/', async (req, res) => {
    // await userController.verifyToken(req, res)
    await userController.create(req, res)
})
routesUser.put('/', async (req, res) => {
    // await userController.verifyToken(req, res)
    await userController.update(req, res)
})
routesUser.delete('/', async (req, res) => {
    // await userController.verifyToken(req, res)
    await userController.delete(req, res)
})
routesUser.post('/login', async (req, res, next) => {
    await userController.login(req, res, next)    
})

module.exports = routesUser