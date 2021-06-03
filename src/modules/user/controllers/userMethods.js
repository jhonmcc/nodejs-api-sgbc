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
            const resFind = await this.findUser(req)
            resFind.user = req.body.user
            resFind.password = req.body.password
            resFind.email = req.body.email
            resFind.full_name = req.body.full_name
            resFind.active = req.body.access
            resFind.active = req.body.active

            const resUpdate = await resFind.save()
            return resUpdate
        } catch (error) {
            console.log(error)
            return false
        }
    },
    async deleteUser(req){
        try {
            const resDelete = await this.findUser(req)
            resDelete.active = 0
            resDelete.deletedAt = new Date().toString()
            console.log(resDelete)
            const resUpdate = await resDelete.save()
            return resUpdate
        } catch (error) {
            console.log(error)
            return false
        }
    },
    async findUser(req){
        try {
            const findOne = await userModel.findOne({where: {user: req.body.user}})
            console.log(findOne)
            return findOne
        } catch (error) {
            return error
        }
    },
    async findAll(req){
        try {
            const findOne = await userModel.findAll()
            return findOne
        } catch (error) {
            return error
        }
    },
    async login(req){
        try {
            // token
        } catch (error) {
            console.log(error)
            return false
        }
    }
}