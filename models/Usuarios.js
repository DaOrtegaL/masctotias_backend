const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Usuarios = sequelize.define(
  "Usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tipo_contribuyente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_identificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    informacion_adicional: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    ultimo_acceso: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },

  {
    timestamps: false,
  }
);

module.exports = Usuarios;
