var express = require('express');
var router = express.Router();
let autosController = require("../controllers/autosController");
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

router.get('/', autosController.index); 
router.get('/homeLogueado', autosController.show); 
// router.get('/product', autosController.product); 
router.get('/product/:id', autosController.product); //: ruta parametrizada, id viaja en la url. Obligatorio
router.get('/product/:id', autosController.comentario);
router.get('/productAdd', autosController.productAdd);
router.post('/productAdd', upload.single ('image'), autosController.store);
router.get('/searchResults', autosController.search); 



// product add
// router.get('/create', autosController.add); 
// router.post('/create', autosController.store);


module.exports = router;
