let autos = require('../data/autos');
const db = require('../database/models');
const usuarios = db.Usuario;
const op = db.Sequelize.Op;

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
         res.render("register")//NO LO ESTAMOS USANDO
    },
    store: (req, res)=> {
        let usuario ={
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            mail: req.body.mail,
            // telefono: req.body.telefono,
            contraseña: req.body.contraseña
        }

        usuarios.create(usuario)
            .then(()=>res.redirect('/users/login'))
            .catch(err => console.log(err))
    },
};

module.exports = controller;