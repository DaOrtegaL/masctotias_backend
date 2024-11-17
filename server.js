const express = require('express');
const cors = require('cors');
const {connectDB} = require('./config/db');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();
const productsRouter = require('./routes/products_2');

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/inicio-sesion', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public','inicio-sesion.html'));
// });

app.use('/api/auth', require('./routes/auth'));

app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, 'localhost', async() => {
    console.log(`server is running http://localhost:${PORT}`);
    const {sequelize} = require('./config/db');

    try{
        await sequelize.sync();
        console.log('Database syncronized');
    }catch(error){
        console.error('Error base de datos', error);
    }
});