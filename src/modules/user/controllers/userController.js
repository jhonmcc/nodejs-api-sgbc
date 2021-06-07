const userMethods = require('./userMethods')

module.exports = {
    async create(req, res){
        let result = await userMethods.createUser(req)
        if (result == false){
            res.send({message: 'Nao foi possivel efetuar o cadastro campos imcompletos ou o cadastro ja existe'})
        }
        
        res.send({create: 'success'})
    },
    async update(req, res){
        let result = await userMethods.updateUser(req)
        if (result == false){
            res.send({ message: "Nao foi possivel atualizar o cadastro."})
        }
        res.send({ update: 'success' })
    },
    async delete(req, res){
        let result = await userMethods.deleteUser(req)
        if (result == false){
            res.send({ message: 'Nao foi possivel deletar o cadastro verifique se as informacoes estao corretas'})
        }
        res.send({ delete: 'success' })
    },
    async find(req, res){
        // await userMethods.findUser(req)
        let result = await userMethods.findAll()
        if (result == false){
            res.send({ message: 'Nao foi possivel localizar o usuario ou senha estao incorretos.'})
        }
        res.status(200).json(result)
    },
    async login(req, res, next){
        const result = await userMethods.login(req)
        if (result == false){
            res.status(400).json({ message: 'Usuario ou Senha invalidos'})
        }
        res.send({ login: 'ok'})
    }
}