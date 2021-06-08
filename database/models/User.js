module.exports = (sequelize, dataTypes)=>{

    let alias = 'User';
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
        telefono: {
            type: dataTypes.INTEGER
        },
        
        fecha: {
            type: dataTypes.DATE
        },

        contrasena: {
            type: dataTypes.STRING
        }
       
    };
    let config = {
        table: "usuarios",
        timestamps: false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)
    return User;
}