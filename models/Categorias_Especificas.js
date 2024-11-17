// models/Categorias_Especificas.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Categorias_Especificas = sequelize.define('Categorias_Especificas', {
        id_categoria_especifica: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_categoria_especifica: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        id_subcategoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Subcategorias', // Tabla relacionada con `id_subcategoria`
                key: 'id_subcategoria'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    }, {
        tableName: 'Categorias_Especificas',
        timestamps: false
    });

    // Definir relaciones
    Categorias_Especificas.associate = (models) => {
        // Relación con `Subcategorias`
        Categorias_Especificas.belongsTo(models.Subcategorias, {
            as: 'subcategoria',
            foreignKey: 'id_subcategoria',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });

        // Relación con `Productos`
        Categorias_Especificas.hasMany(models.Productos, {
            as: 'productos',
            foreignKey: 'id_categoria_especifica',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    };

    return Categorias_Especificas;
};
