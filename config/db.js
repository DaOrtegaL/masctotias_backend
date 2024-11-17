const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('mascotitas_db', process.env.DB_USER, process.env.DB_PWD, {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
});

const connectDB = async() => {
    try{
        await sequelize.authenticate();
        console.log('connected to database');
    }catch(error){
        console.error('Error Connecting to database', error);
    }
};

module.exports = {sequelize, connectDB};