var express = require('express');
var router = express.Router();
let productAddController = require("../controllers/productAddController");

router.get('/', productAddController.productAdd)

module.exports = router;