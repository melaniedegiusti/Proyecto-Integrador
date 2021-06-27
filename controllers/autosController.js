// let autos = require('../data/autos');
const db = require('../database/models');
const producto = db.Producto;
const op = db.Sequelize.Op;

let controller = {
    index: function(req, res) {
         producto.findAll({
            include: [{association: 'comentario'}],
            order: [['fecha', 'DESC']],
         })
            .then((resultados)=> res.render('home', {resultados}))
            .catch((err) => console.log(err))
    },
    product: function(req, res) {
        let primaryKey = req.params.id;
         producto.findByPk(primaryKey, {
                include: [{association: 'usuario'},
            ] })
            .then((resultado) => {
                db.Comentario.findAll({
                    where:{
                        product_id:resultado.id
                    },
                    include:[{association: 'usuario'},
                ],
                 order: [
                     ['creacion', 'DESC'],
                 ],
                })
            .then((comentarios)=>{
                //res.send({resultado,comentarios})
        
               res.render('product',{resultado,comentarios})
            })
        })
            .catch( (err) => console.log(err))
        
    },
    comentarioAdd: (req,res) => {
       if(req.session.user == undefined){
           return res.redirect('/users/login')
       }else {
           let comentario={
               texto: req.body.comentario,
               user_id: req.session.user.id,
               product_id: req.params.id,
           }
           db.Comentario.create(comentario)

           .then(()=> res.redirect(`/autos/product/${req.params.id}`))
           .catch(err=> console.log(err))
       }
    },
    
    show: function(req, res) {   //listamos recursos
        producto.findAll({
            order: [
                ['fecha', 'DESC'],
            ],
        })
            .then((resultados)=> res.render('homeLogueado', {resultados}))
            .catch((err) => console.log(err))
        //  res.render("homeLogueado", {"autosDestacados": autos, "autosComentario": autos});
    },
    productAdd: (req, res)=> {
        res.render('productAdd')
    },
    store: (req, res)=> {
        let auto={
            nombre: req.body.nombre,
            image: req.file.filename,
            descripcion: req.body.descripcion,
            user_id: req.session.user.id,
        }   
        producto.create(auto)
            .then(()=>res.redirect('/autos'))
            .catch( (err) => console.log(err))

    },
    products: function(req, res) {
        res.render("searchResults", {"autosid": autos});
    },
    editar: (req, res) => {
        let primaryKey = req.params.id;
        db.Producto.findByPk(primaryKey)
            .then((auto) => {
                // if (req.session.user == undefined) {
                //     res.redirect(`/home${req.params.id}`)
                 //}
                //else if (auto.usuarios_id == req.session.user.id) {
                    db.Producto.findByPk(primaryKey)
                        //.then(resultados => res.send( resultados ))
                        .then(resultados => res.render("edit", { resultados }))
                        .catch(err => console.log(err))
               // }
               // else {
               //     res.redirect(`/home${req.params.id}`)
              //  }
            })
    },
    editarPost: (req, res) => {
        let primaryKey = req.params.id;
        db.Producto.findByPk(primaryKey)
            .then((auto) => {
               // if (req.session.user == undefined) {
                //    res.redirect(`/productos/busqueda/${req.params.id}`)
                //}
                //else if (auto.usuarios_id == req.session.user.id) {
                    let actualizarauto = req.body
                    db.Producto.update(actualizarauto, { where: { id: primaryKey } })
                        .then(() => res.redirect(`/autos/product/${req.params.id}`))
                        .catch(err => console.log(err))
               // }
                //else {
                    res.redirect(`/autos/product/${req.params.id}`)
               // }
            })
    },
    borrar: (req, res) =>{
        let primaryKey = req.params.id;
        producto.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(() => res.redirect('/autos'))
        .catch(err=> console.log(err))
    },

    search: function(req, res) {
        let searchData = req.query.search;
        producto.findAll({
            where: [{ 
                nombre: {[op.like]: `%${searchData}%`}, 
                descripcion:{[op.like]: `%${searchData}%`}, 
            }]
        })
        .then(resultados => {
            console.log(resultados)
            res.render('searchResults',{resultados})
        })
        .catch(err => console.log(err))

    },
};



module.exports = controller;