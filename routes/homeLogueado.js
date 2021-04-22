var express = require('express');
var router = express.Router();
let homeLogueadoController = require("../controllers/homeLogueadoController");


router.get('/', homeLogueadoController.index); 



module.exports = router;
