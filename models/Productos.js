// models/Productos.js
const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../config/db"); // Importa la instancia configurada de Sequelize

// Define el modelo `Productos`
const Productos = sequelize.define('Productos', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_producto: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_marca: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    presentacion: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    etapa: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imagen_url: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    id_categoria_especifica: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categorias_Especificas',
            key: 'id_categoria_especifica'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    tableName: 'Productos',
    timestamps: false
});

// Importa y define otros modelos aquí si es necesario
const Categorias_Especificas = require('./Categorias_Especificas')(sequelize, DataTypes);

// Configura la asociación del modelo `Productos` con `Categorias_Especificas`
Productos.belongsTo(Categorias_Especificas, {
    as: 'categoriaEspecifica',
    foreignKey: 'id_categoria_especifica',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


Productos.associate = (models) => {
    Productos.belongsTo(models.Marcas, {
        as: 'marca',
        foreignKey: 'id_marca',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    
    Productos.belongsTo(models.Categorias_Especificas, {
        as: 'categoriaEspecifica',
        foreignKey: 'id_categoria_especifica',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
};

// Exporta el modelo `Productos` y cualquier otro modelo si es necesario
module.exports = Productos;