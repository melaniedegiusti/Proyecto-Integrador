let autos = require('../data/autos');

let controller = {
    index: function(req, res) {
       // res.send(autos.lista);
        res.render("home", {"autos": autos.lista});
    },
};

module.exports = controller;