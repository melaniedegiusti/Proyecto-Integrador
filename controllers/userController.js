let autos = require('../data/autos');
const db = require('../database/models');
const usuarios = db.Usuario;
const op = db.Sequelize.Op;
const bcrypt = require ('bcryptjs');
const producto = db.Producto;



let controller = {
   index: (req, res) =>{
       // res.send(autos.lista);
       if (req.session.user != undefined) {
           return res.redirect('/autos')
       } else {
           return res.render('login')
       } 
    },
    profile: (req, res) =>{
        producto.findAll()
            .then((resultados)=> res.render('profile', {resultados}))
            .catch((err) => console.log(err))
        
    },
    profileEdit: (req, res)=> {
        res.render('profileEdit')
    },
    register: (req, res) =>{
        if (req.session.user != undefined) {
            return res.redirect('/autos')
        } else {
            return res.render('register')
        }
        
    },
    // login: function (req, res) {
    //     res.render('login')
    // },
    processLogin:(req, res) =>{
        let errors = {}; //variable para guardar errores
        
        usuarios.findOne({
            where: [{mail: req.body.mail}]
            })
            .then(usuario => {
                if (user==null) {
                    errors.login = "Email es incorrecto";
                    res.locals.error = errors;
                    return res.render('login')
                } else if (bcrypt.compareSync(req.body.contraseña, user.contraseña) == false){
                    errors.login = "Contraseña incorrecta";
                    res.locals.error = errors;
                    return res.render('login')
                } else {
                    req.session.user = user;

                    if(req.body.recordame != undefined){
                        res.cookie('userId', user.id, {maxAge: 1000 * 60 * 10})
                    } 
                }
                return res.redirect('/autos/homeLogueado')
            })
            .catch( error => console.log(error))
    },


    store: (req, res)=> {
        let errors ={};
        //chequear campos obligatorios
        if(req.body.mail == ""){
            errors.register = "Email no puede estar vacío"
            res.locals.errors = errors

            return res.render('register')

        } else if(req.body.constraseña == ""){
            errors.register = "Contraseña no puede estar vacío"
            res.locals.errors = errors

            return res.render('register')

        } else {
            usuarios.findOne({
                where: [{mail: req.body.mail}]
            })
            .then(user =>{
                if(user != null){
                    errors.register = "Ya existe un usuario con ese email"
                    res.locals.errors = errors

                    return res.render('register')
                } else {
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
                }              
            })
            .catch( error => console.log(error))
        }
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