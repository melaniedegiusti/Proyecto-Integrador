var express = require('express');
var router = express.Router();
let autosController = require("../controllers/autosController");

router.get('/homeLogueado', autosController.show); 



module.exports = router;
