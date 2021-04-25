let autos = require('../data/autos');

let controller = {
    product: function(req, res) {
        res.render("searchResults", {"autosid": autos});
    },
    nombre: function(req, res) {
        let nombres = req.params.nombre;
        let resultados=[];
        for (let i = 0; i < autos.length; i++){
            if(autos[i].nombre == nombres){
                resultados.push(autos[i])
            }
        };
        console.log(resultados);
        res.render("searchResults", {'autosid': resultados})

    },
};


module.exports = controller;