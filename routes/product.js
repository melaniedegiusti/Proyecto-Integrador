var express = require('express');
var router = express.Router();
let productController = require("../controllers/productController");

router.get('/', productController.product); 
router.get('/product/:id', productController.id); 



module.exports = router;