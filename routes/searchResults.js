var express = require('express');
var router = express.Router();
let autosController = require("../controllers/autosController");

 

router.get('/', autosController.products); 
router.get('/:id', autosController.search); 


module.exports = router;