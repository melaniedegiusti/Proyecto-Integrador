let autos = require('../data/autos');

let controller = {
    index: function(req, res) {
       // res.send(autos.lista);
        res.render("home", {"autosDestacados": autos.destacados, "autosComentario": autos.comentarios});
    },

};

module.exports = controller;