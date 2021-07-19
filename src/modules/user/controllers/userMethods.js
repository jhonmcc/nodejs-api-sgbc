const userModel = require('../models/userModel')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const { Op } = require('sequelize')

// require dotenv 
require('dotenv').config()

module.exports = {
    async createUser(req){
        try {
            // const resCreate = await userModel.create({
            const [resCreate, created] = await userModel.findOrCreate({
                where: {
                    [Op.or]: [
                        { user: req.body.user },
                        { email: req.body.email }
                    ]},
                defaults: {
                    uuid: uuid.v4(),
                    user: req.body.user,
                    // password: await this.generatePassword(6),
                    password: bcryptjs.hashSync(req.body.password),
                    email: req.body.email,
                    full_name: req.body.full_name,
                    access: req.body.access,
                    active: req.body.active
                }
            })
            if (created == false){
                return false
            }
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
            return findOne
        } catch (error) {
            return error
        }
    },
    async findAll(req){
        try {
            let findAll
            if (req.query.limit == undefined){
                findAll = await userModel.findAll()
            }
            else {
                if (parseInt(req.query.page) == 0){
                    findAll = await userModel.findAll({
                        limit: parseInt(req.query.limit),
                        offset: parseInt(req.query.page)
                    })
                }
                else {
                    findAll = await userModel.findAll({
                        limit: parseInt(req.query.limit),
                        offset: parseInt(req.query.page) + 1
                    })
                }
            }
            return findAll
        } catch (error) {
            return error
        }
    },
    async login(req){
        try {
            const resUser = await this.findUser(req)
            if (resUser == null){
                return false
            }
            else if (bcryptjs.compareSync(req.body.password, resUser.password)){
                const token = jwt.sign({id: resUser.uuid}, process.env.SECRET, {
                    expiresIn: '1m'
                    // expiresIn: 10
                })

                return { auth: true, token: token }
            }

            return false
        } catch (error) {
            console.log(error)
            return false
        }
    },
    async verifyToken(req){
        try {
            const token = req.headers['x-access-token']
            if (!token) return false
            return token
        } catch (error) {
            console.log(error)
            return false
        }
    },
    async validateToken(token){
        try {
            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if (err) return false
                console.log(decoded)
                return decoded
            })
        } catch (error) {
            console.log(error)
            return false
        }
    },
    async generatePassword(length){
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        let charactersLength = characters.length
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result;
    }
}