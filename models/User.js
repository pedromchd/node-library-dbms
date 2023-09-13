const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Livro = require('./Livro')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

User.hasMany(Livro, { through: 'Emprestimo' });

module.exports = User;
