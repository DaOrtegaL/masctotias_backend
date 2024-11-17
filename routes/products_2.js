const express = require('express');
const router = express.Router();
const Productos = require('../models/Productos'); // Adjust path if necessary

// Ruta para obtener todos los productos sin filtros
router.get('/', async (req, res) => {
    try {
        // Realiza una consulta para obtener todos los productos
        const productos = await Productos.findAll();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

module.exports = router;
