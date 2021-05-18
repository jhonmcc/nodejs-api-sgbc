const Sequelize = require('sequelize')

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
    name: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    emailUser: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passUser: {
        type: Sequelize.STRING,
        allowNull: false
    }
}