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
        // telefono: {
        //     type: dataTypes.INTEGER
        // },
        
        fecha: {
            type: dataTypes.DATE
        },

        contraseña: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
       
    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config)

    Usuario.associate = (models)=>{
        //relacion uno
        Usuario.hasMany(models.Producto, {
            as: 'producto', //nombre que le ponemos nosotros 
            foreignKey: 'user_id'
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentario', //nombre que le ponemos nosotros 
            foreignKey: 'user_id'
        })
    }

    return Usuario;
}