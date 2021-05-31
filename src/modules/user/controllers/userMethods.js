const userModel = require('../models/userModel')
const uuid = require('uuid')

module.exports = {
    async createUser(req){
        try {
            const resCreate = await userModel.create({
                uuid: uuid.v4(),
                user: req.body.user,
                password: req.body.password,
                email: req.body.email,
                full_name: req.body.full_name,
                access: req.body.access,
                active: req.body.active
            })
        } catch (error) {
            
        }
    },
    async updateUser(){
    return ''
    },
    async deleteUser(){
        return ''
    },
    async findUser(){
        return userModel.findAll()
    }
}