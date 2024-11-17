// const express = require('express');
// const router = express.Router();
// const Productos = require('../models/Productos');
// const Categorias_Especificas = require('../models/Categorias_Especificas');
// const Subcategorias = require('../models/Subcategorias');
// const Categorias = require('../models/Categorias');
// const Marcas = require('../models/Marcas');

// // Route to get products with filters
// router.get('/', async (req, res) => {
//     try {
//         // Extract filters from query parameters
//         const { id_categoria, id_subcategoria, id_categoria_especifica, id_marca } = req.query;

//         // Build where clause to apply dynamic filters
//         const whereClause = {};

//         // Apply filters to `whereClause` with association path references
//         if (id_categoria) {
//             whereClause['$categoriaEspecifica.subcategoria.categoria.id_categoria$'] = id_categoria;
//         }
//         if (id_subcategoria) {
//             whereClause['$categoriaEspecifica.subcategoria.id_subcategoria$'] = id_subcategoria;
//         }
//         if (id_categoria_especifica) {
//             whereClause.id_categoria_especifica = id_categoria_especifica;
//         }
//         if (id_marca) {
//             whereClause.id_marca = id_marca;
//         }

//         // Query database with filters and valid includes
//         const productos = await Productos.findAll({
//             where: whereClause,
//             include: [
//                 {
//                     model: Categorias_Especificas,
//                     as: 'categoriaEspecifica',
//                     include: [
//                         {
//                             model: Subcategorias,
//                             as: 'subcategoria',
//                             include: [
//                                 {
//                                     model: Categorias,
//                                     as: 'categoria',
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     model: Marcas,
//                     as: 'marca',
//                 }
//             ]
//         });

//         res.json(productos);
//     } catch (error) {
//         console.error('Error al obtener productos:', error);
//         res.status(500).json({ error: 'Error al obtener productos' });
//     }
// });

// module.exports = router;
