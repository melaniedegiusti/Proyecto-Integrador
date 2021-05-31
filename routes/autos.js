var express = require('express');
var router = express.Router();
let autosController = require("../controllers/autosController");


router.get('/', autosController.index); 
router.get('/homeLogueado', autosController.show); 
// router.get('/product', autosController.product); 
router.get('/product/:id', autosController.product);        //: ruta parametrizada, id viaja en la url. Obligatorio
router.get('/productAdd', autosController.productAdd);
router.get('/searchResults', autosController.products); 
router.get('/searchResults/:id', autosController.search); 
// product add
// router.get('/create', autosController.add); 
// router.post('/create', autosController.store);


module.exports = router;
