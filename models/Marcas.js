// models/Marcas.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Marcas = sequelize.define('Marcas', {
    id_marca: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_marca: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'Marcas',
    timestamps: false,
});

Marcas.associate = (models) => {
    Marcas.belongsTo(models.Categorias, {
        as: 'categoria',
        foreignKey: 'id_categoria',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};

module.exports = Marcas;
