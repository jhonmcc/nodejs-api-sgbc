const userMethods = require('./userMethods')

module.exports = {
    async create(req, res){
        let result = await userMethods.createUser(req)
        if (result == false){
            res.send({message: 'Nao foi possivel efetuar o cadastro campos imcompletos.'})
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
    async find(){
        await userMethods.findUser()
    }
}