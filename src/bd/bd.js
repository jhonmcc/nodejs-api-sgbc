const Sequelize = require('sequelize')

const instance = new Sequelize(
    process.env.BD_NAME,
    process.env.BD_USER,
    process.env.BD_PASS,
    {
        host: process.env.HOST_BD,
        dialect: process.env.DIALECT_BD
    }
)