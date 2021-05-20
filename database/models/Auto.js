module.exports = (sequelize, dataTypes)=>{

    let alias = 'Auto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

         nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
 
        fecha: {
            type: dataTypes.DATE
        },
        user_id :{
            type: dataTypes.INTEGER
        },

    };
    let config = {
        table: "productos",
        timestamps: false,
        underscored: true
    }

    const Auto = sequelize.define(alias, cols, config)
    return Auto;

}