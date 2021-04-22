let autos = require('../data/autos');

let controller = {
    product: function(req, res) {
        res.render("searchResults", {"infoAuto": autos});
    },
    
    
    
};

module.exports = controller;