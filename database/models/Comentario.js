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
        auto_id :{
            type: dataTypes.INTEGER
        },
    };
    let config = {
        table: "comentarios",
        timestamps: false,
        underscored: true
    }

    const Auto = sequelize.define(alias, cols, config)
    return Auto;
}