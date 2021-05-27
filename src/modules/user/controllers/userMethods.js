const userModel = require('../models/userModel')
const conn = require('../../../bd/bdConfig')

module.exports = {
    async findUser(){
        return userModel.findAll()
    },
    async createUser(){

    },
    async deleteUser(){

    }
    async updateUser(){
        
    }
}