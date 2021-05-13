let autos = require('../data/autos');

let controller = {
   index: function(req, res) {
       // res.send(autos.lista);
        res.render("register", {"autosDestacados": autos, "autosComentario": autos}); //NO LO ESTAMOS USANDO
    },

};

module.exports = controller;