// models/Subcategorias.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Subcategorias = sequelize.define('Subcategorias', {
    id_subcategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_subcategoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Categorias',
            key: 'id_categoria',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
}, {
    tableName: 'Subcategorias',
    timestamps: false,
});

Subcategorias.associate = (models) => {
    Subcategorias.belongsTo(models.Categorias, {
        as: 'categoria',
        foreignKey: 'id_categoria',
    });
    Subcategorias.hasMany(models.Categorias_Especificas, {
        as: 'categoriasEspecificas',
        foreignKey: 'id_subcategoria',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    });
};

module.exports = Subcategorias;
