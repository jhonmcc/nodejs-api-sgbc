const userMethods = require('./userMethods')

module.exports = {
    async create(){
        await userMethods.createUser()
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