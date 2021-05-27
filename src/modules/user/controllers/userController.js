const userMethods = require('./userMethods')

module.exports = {
    async create(){
        userMethods.createUser()
    }
}