let autos = require('../data/autos');

let controller = {
    index: function(req, res) {
       // res.send(autos.lista);
        res.render("profile", {"autosDestacados": autos, "autosComentario": autos});
    },

};

module.exports = controller;