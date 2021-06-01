const userMethods = require('./userMethods')

module.exports = {
    async create(req, res){
        const result = await userMethods.createUser(req)
        if (result == false){
            res.send({message: 'Nao foi possivel efetuar o cadastro campos imcompletos.'})
        }
        
        res.send({create: 'success'})
    },
    async update(){
        await userMethods.updateUser()
    },
    async delete(){
        await userMethods.deleteUser()
    },
    async find(){
        await userMethods.findUser()
    }
}