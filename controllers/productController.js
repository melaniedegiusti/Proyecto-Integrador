let autos = require('../data/autos');

let controller = {
    product: function(req, res) {
        res.render("product", {"infoAuto": autos});
    },
    
    id: function(req, res) {
        let ids = req.params.id; //requerir parametros del query string
        let resultados=[];
        for (let i = 0; i < autos.length; i++){
            if(autos[i].id == ids){
                resultados.push(autos[i])
            }
        };
        console.log(resultados);
        res.render("product", {'autosid': resultados}) // manda a la vista el autos id para usarlo 
    },
};

module.exports = controller;