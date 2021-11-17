//importar express y express router para establecer las rutas controladas con el fetch API

const express = require('express');

const router = express.Router();

//importar los controladores para las rutas

const { getAllProducts, getProduct } = require('../controller/productsControllers');

//obtiene todos los productos de la base de datos
//get/api.product
//acceso publico

router.get('/', getAllProducts);

//obtiene cada producto de la base de datos por medio del param:id
//get/api.products/:id
//acceso publico

router.get('/:id', getProduct);

module.exports = router;
