//let autos = require('../data/autos');
const db = require('../database/models');
const producto = db.Producto;

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
        // res.send(autos.lista);
         res.render("homeLogueado", {"autosDestacados": autos, "autosComentario": autos});
    },
    productAdd: (req, res)=> {
        res.render('productAdd')
    },
    products: function(req, res) {
        res.render("searchResults", {"autosid": autos});
    },
    search: function(req, res) {
        let nombres = req.params.nombre;
        let resultados=[];
        for (let i = 0; i < autos.length; i++){
            if(autos[i].nombre == nombres){
                resultados.push(autos[i])
            }
        };
        console.log(resultados);
        res.render("searchResults", {'autosid': resultados})

    },
};

module.exports = controller;