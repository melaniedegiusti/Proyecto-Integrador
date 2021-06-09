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
        }
       
    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config)
    return Usuario;
}