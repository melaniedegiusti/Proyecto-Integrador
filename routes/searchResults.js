var express = require('express');
var router = express.Router();
let searchResultsController = require("../controllers/searchResultsController");

 

router.get('/', searchResultsController.product); 
router.get('/:id', searchResultsController.nombre); 


module.exports = router;