module.exports = (sequelize, dataTypes)=>{

    let alias = 'Producto';
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
        image: {
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

    const Producto = sequelize.define(alias, cols, config)
    return Producto;

}