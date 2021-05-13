module.exports = (sequelize, dataTypes)=>{

    let alias = 'Auto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
/*         created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
 */     nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.STRING
        },
 /*        release_date: {
            type: dataTypes.DATE
        },
 */     fecha: {
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