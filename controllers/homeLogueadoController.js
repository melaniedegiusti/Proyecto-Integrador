let autos = require('../data/autos');

let controller = {
    index: function(req, res) {   //listamos recursos
       // res.send(autos.lista);
        res.render("homeLogueado", {"autosDestacados": autos, "autosComentario": autos});
    },

};

module.exports = controller;