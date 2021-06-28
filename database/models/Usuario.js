module.exports = (sequelize, dataTypes)=>{

    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        mail:{
            type: dataTypes.STRING
        },
        
        fecha: {
            type: dataTypes.DATE
        },

        contraseña: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        update:{
            type: dataTypes.DATE
        },
       
    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = (models)=>{
        //relacion uno con usuario
        Usuario.hasMany(models.Producto, {
            as: 'producto', //nombre que le ponemos nosotros 
            foreignKey: 'user_id'
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentario',  
            foreignKey: 'user_id'
        })
    }

    return Usuario;
}