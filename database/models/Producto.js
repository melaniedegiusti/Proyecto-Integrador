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

    Producto.associate = (models)=>{
        //relacion muchos
        Producto.belongsTo(models.Usuario, {
            as: 'usuario', 
            foreignKey: 'user_id'
        })    
        //relacion uno
        Producto.hasMany(models.Comentario, {
            as: 'comentario', //nombre que le ponemos nosotros 
            foreignKey: 'product_id'
        })
    }



    return Producto;

}