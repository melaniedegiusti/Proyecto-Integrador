var express = require('express'); // Requerimos modulo de express
var router = express.Router(); 
let autosController = require("../controllers/autosController");

router.get('/', autosController.product); 
router.get('/:id', autosController.id); //: ruta parametrizada, id viaja en la url. Obligatorio



module.exports = router;