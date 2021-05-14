let autos = require('../data/autos');

let controller = {
   index: function(req, res) {
       // res.send(autos.lista);
        res.render("login", {"autosDestacados": autos, "autosComentario": autos});
    },
    profile: function(req, res) {
        // res.send(autos.lista);
         res.render("profile", {"autosDestacados": autos, "autosComentario": autos});
     },
    profileEdit: (req, res)=> {
        res.render('profileEdit')
    },
    register: function(req, res) {
        // res.send(autos.lista);
         res.render("register", {"autosDestacados": autos, "autosComentario": autos}); //NO LO ESTAMOS USANDO
    },
};

module.exports = controller;