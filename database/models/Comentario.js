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

   
    Comentario.associate = (models) => {
        //relacion muchos
        Comentario.belongsTo(models.Producto, {
            as: 'producto',
            foreignKey: 'product_id'
        })
        Comentario.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'user_id'
        })

    }


    return Comentario;
}