module.exports = (sequelize, dataTypes)=>{

    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING(400)
        },
        creacion: {
            type: dataTypes.DATE
        },
        user_id :{
            type: dataTypes.INTEGER
        },
        product_id :{
            type: dataTypes.INTEGER
        },
    };
    let config = {
        table: "comentarios",
        timestamps: false,
        underscored: true
    }

    const Comentario = sequelize.define(alias, cols, config)

    // Comentario.associate = (models)=> {
    //     Comentario.belongsToMany(models.Producto, {
    //         as: 'producto',
    //         through: 'comentario_id', // nose si esta bien
    //         otherKey: 'product_id',
    //         timestamps: false,
    //     })
    // }


    return Comentario;
}