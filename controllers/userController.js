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
    
    profileEdit: (req, res)=> {
        let primaryKey = req.params.id;
        usuarios.findByPk(primaryKey)
        .then(resultados =>
            res.render('profileEdit', {resultados})
        )
        .catch( error => console.log(error))
    },
    update:(req, res)=>{
        let primaryKey = req.params.id;
        usuarios.findByPk(primaryKey)
        .then((users)=>{
            // if(req.session.user == undefined){
            //     res.redirect("/autos")
            // } else{
                let actualizarUsuario = {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    mail: req.body.mail,
                    contraseña: bcrypt.hashSync(req.body.contraseña,10),
                    // image: req.file.filename,
                }
                console.log(actualizarUsuario);
                usuarios.update(
                    actualizarUsuario,{
                        where: {id: primaryKey}
                    }
                )
                .then(()=> res.redirect(`/users/perfiles/${req.params.id}`))
            // }
        })
        .catch( error => console.log(error))
    },


    register: (req, res) =>{
        if (req.session.user != undefined) {
            return res.redirect('/autos')
        } else {
            return res.render('register')
        }
        
    },
    
    processLogin:(req, res) =>{
        let errors = {}; //variable para guardar errores
        
        usuarios.findOne({
            where: [{mail: req.body.mail}]
            })
            .then(user => {
                if (user==null) {
                    errors.login = "El email o la contrsena son incorrectos"
                    res.locals.error = errors
                    return res.render('login')

                } else if (bcrypt.compareSync(req.body.contraseña, user.contraseña) == false){
                    errors.login = "El email o la contrsena son incorrectos"
                    res.locals.error = errors
                    return res.render('login')

                } else {
                    req.session.user = user;
                    if(req.body.recordame != undefined){
                        res.cookie('userId', user.id, {maxAge: 1000 * 60 * 10})
                    } 
                }
                return res.redirect('/autos')
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

        } else if(req.body.contraseña.length < 4){
            errors.register = "Contraseña debe tener mas de 3 caracteres"
            res.locals.errors = errors

            return res.render('register')
        }else {
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
        let primaryKey = req.params.id
        if(req.session.user == req.params.id){
            res.redirect(`/users/perfiles/${req.params.id}`)
        }else{
            usuarios.findByPk(primaryKey)
            .then((user)=> {
                db.Producto.findAll({
                    where: [{user_id: user.id}]
                })
                .then((producto)=>{
                    db.Comentario.findAll({
                        where: [{user_id: user.id}],
                        include: [{association: 'usuario'}],
                        order: [['creacion', 'DESC']],
                    }) 
                    .then((comentario)=>{
                        return res.render('perfiles', {producto, comentario, user})
                    })                 
                })
                .catch((error)=> console.log(error))
            })
        }
    }
};

module.exports = controller;