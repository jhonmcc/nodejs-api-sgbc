const userModel = require('../models/userModel')
const conn = require('../../../bd/bdConfig')

module.exports = {
    findUser(){
        return userModel.findAll()
    }
}