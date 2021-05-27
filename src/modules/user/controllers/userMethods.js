const userModel = require('../models/userModel')

module.exports = {
    async findUser(){
        return userModel.findAll()
    },
    async createUser(){
        return ''
    },
    async deleteUser(){
        return ''
    },
    async updateUser(){
        return ''
    }
}