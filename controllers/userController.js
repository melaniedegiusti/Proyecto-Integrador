let autos = require('../data/autos');
const db = require('../database/models');
const usuarios = db.Usuario;
const op = db.Sequelize.Op;
const bcrypt = require ('bcryptjs');
const producto = db.Producto;



let controller = {
   index: function(req, res) {
       // res.send(autos.lista);
        res.render("login", {"autosDestacados": autos, "autosComentario": autos});
    },
    profile: function(req, res) {
        // res.send(autos.lista);
        //  res.render("profile", {"autosDestacados": autos, "autosComentario": autos});
        producto.findAll()
            .then((resultados)=> res.render('profile', {resultados}))
            .catch((err) => console.log(err))
        //  res.render("homeLogueado", {"autosDestacados": autos, "autosComentario": autos});
    },
    profileEdit: (req, res)=> {
        res.render('profileEdit')
    },
    register: function(req, res) {
        // res.send(autos.lista);
         res.render('register')//NO LO ESTAMOS USANDO
    },
    login: function (req, res) {
        res.render('login')
    },
    processLogin: function (req, res) {
        db.Usuario.findOne({
            where: [{mail: req.body.mail}]
            })
            .then(user => {
                req.session.user = user
                if(req.body.recordame){
                    res.cookie('userId', user.id, {maxAge: 1000 * 60 * 10})
                }
                return res.redirect('/autos/homeLogueado')
            })
            .catch( error => console.log(error))
    },


    store: (req, res)=> {
        let usuario ={
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            mail: req.body.mail,
            image: req.file.filename,
            contraseña: bcrypt.hashSync(req.body.contraseña,10),
        }

        usuarios.create(usuario)
            .then(()=>res.redirect('/users/login'))
            .catch(err => console.log(err))
    },

    logout: (req, res)=> {
        req.session.destroy()
        res.clearCookie("userId")

        return res.redirect('/autos')
    },
    perfiles: (req, res)=> {
        let primaryKey = req.params.id;
         usuarios.findByPk(primaryKey)
        .then((resultados)=> res.render('perfiles', {resultados}))
        .catch((err) => console.log(err))
    }
};

module.exports = controller;