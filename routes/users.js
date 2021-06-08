var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/profile', userController.profile); 
router.get('/login', userController.index);
router.get('/register', userController.register); 
router.post('/register', userController.store);
router.get('/profileEdit', userController.profileEdit);


module.exports = router;
