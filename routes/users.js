const { Router } = require('express');
var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController");
let multer = require ('multer');
let path= require ('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
            cb (null,'public/images')
    },
    filename: (req, file, cb) => {
            cb (null, file.fieldname + '-' +Date.now ()+ path.extname(file.originalname))
    },
})
var upload= multer ({storage:storage})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', userController.index);
router.post('/login', userController.processLogin);
router.get('/register', userController.register); 
router.post('/register', upload.single ('image'), userController.store);
router.get('/profileEdit/:id', userController.profileEdit);
router.post('/profileEdit/:id', userController.update); 
router.post('/logout', userController.logout);
router.get('/perfiles/:id', userController.perfiles);


module.exports = router;
