const userModel = require('./models/userModel')

module.exports = {
    listar(){
        return userModel.findAll()
    }
}