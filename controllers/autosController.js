let autos = require('../data/autos');
const db = require('../database/models');
const producto = db.Producto;
const op = db.Sequelize.Op;

let controller = {
    index: function(req, res) {
         producto.findAll()
            .then((resultados)=> res.render('home', {resultados}))
            .catch((err) => console.log(err))
        // res.render("home", {"autosDestacados": autos, "autosComentario": autos});
    },
    product: function(req, res) {
        let primaryKey = req.params.id;
         producto.findByPk(primaryKey)
             .then((resultado) => res.render('product', {resultado}))
             .catch( (err) => console.log(err))
        // res.render("product", {"infoAuto": autos});
    },
    
    // id: function(req, res) {
    //     let ids = req.params.id; //requerir parametros del query string
    //     let resultados=[];
    //     for (let i = 0; i < autos.length; i++){
    //         if(autos[i].id == ids){
    //             resultados.push(autos[i])
    //         }
    //     };
    //     console.log(resultados);
    //     res.render("product", {'autosid': resultados}) // manda a la vista el autos id para usarlo 
    // },
    show: function(req, res) {   //listamos recursos
        producto.findAll()
            .then((resultados)=> res.render('homeLogueado', {resultados}))
            .catch((err) => console.log(err))
        //  res.render("homeLogueado", {"autosDestacados": autos, "autosComentario": autos});
    },
    productAdd: (req, res)=> {
        res.render('productAdd')
    },
    store: (req, res)=> {
        let auto={
            nombre: req.body.nombre,
            image: req.file.filename,
            descripcion: req.body.descripcion,
        }   
        producto.create(auto)
            .then(()=>res.redirect('/autos'))
            .catch( (err) => console.log(err))

    },
    products: function(req, res) {
        res.render("searchResults", {"autosid": autos});
    },
    search: function(req, res) {
        let searchData = req.query.search;
        producto.findAll({
            where: [
                { nombre: {[op.like]: `%${searchData}%`}}
            ]
        })
        .then(resultados => res.render('searchResults',{resultados}))
        .catch(err => console.log(err))

    },
};

module.exports = controller;