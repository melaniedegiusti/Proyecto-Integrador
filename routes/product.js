var express = require('express'); // Requerimos modulo de express
var router = express.Router(); 
let productController = require("../controllers/productController");

router.get('/', productController.product); 
router.get('/:id', productController.id); //: ruta parametrizada, id viaja en la url. Obligatorio



module.exports = router;