// models/Categorias.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Ajusta la ruta según tu configuración

const Categorias = sequelize.define('Categorias', {
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_categoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    tableName: 'Categorias',
    timestamps: false,
});

Categorias.associate = (models) => {
    Categorias.hasMany(models.Subcategorias, {
        as: 'subcategorias',
        foreignKey: 'id_categoria',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    
    Categorias.hasMany(models.Marcas, {
        as: 'marcas',
        foreignKey: 'id_categoria',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};

module.exports = Categorias;
