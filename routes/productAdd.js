var express = require('express');
var router = express.Router();
let autosController = require("../controllers/autosController");

router.get('/', autosController.productAdd)

module.exports = router;