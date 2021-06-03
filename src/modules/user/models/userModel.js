const Sequelize = require('sequelize')
const bdInstance = require('../../../bd/bdConfig')

const cols = {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    access: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    active: {
        type: Sequelize.TINYINT,
        allowNull: false
    },
    deletedAt: {
        type: 'DATETIME',
    }
}

const options = {
    // freezeTableName = true, 
    tableName: 'users',
    timestamps: true
}

module.exports = bdInstance.define('users', cols, options)