var express = require('express');
var router = express.Router();
let autosController = require("../controllers/autosController");



router.get('/', autosController.index); 



module.exports = router;