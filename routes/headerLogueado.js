var express = require('express');
var router = express.Router();
let headerLogueadoController = require("../controllers/headerLogueadoController");

router.get('/', headerLogueadoController.mostrar);
router.post('/', headerLogueadoController.mostrar);
module.exports = router;

