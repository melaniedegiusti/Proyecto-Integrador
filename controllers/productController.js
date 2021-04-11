let autos = require('../data/autos');

let controller = {
    product: function(req, res) {
        res.render("product", {"infoAuto": autos});
    },
    
    id: function(req, res) {
        let ids = req.params.id
        let resultados =[]
        for (let i=0; i<autos.length; i+=1){
            if(autos[i].id==ids){
                resultados.push(autos[i])
            }
        }
        res.render("product", {"autosid": resultados})
    },
};

module.exports = controller;