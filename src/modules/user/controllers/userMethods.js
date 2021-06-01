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
            return resCreate
        } catch (error) {
            console.log(error)
            return false
        }
    },
    async updateUser(req){
        try {
            const resUpdate = await this.findUser(req)
            console.log(resUpdate)
        } catch (error) {
            console.log(error)
            return error   
        }
    },
    async deleteUser(){
        return ''
    },
    async findUser(req){
        try {
            const findOne = await userModel.findOne({where: {user: req.body.user}}) 
            return findOne
        } catch (error) {
            return error
        }
    }
}