//require database models to connect to 
const db = require("../models");

//setting up the book controllers
module.exports = {
    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => status(422).json(err));
    },

    findById: function(req, res) {
        db.Book
            .findById(req.params.id).then(
                dbModel => res.json(dbModel)
            ).catch(
                err => res.status(422).json(err)
                );
    },

    create: function(req, res) {
        db.Book
            .create(req.body).then(
                dbModel => res.json(dbModel)
            ).catch(
                err => res.status(422).json(err)
            );
    },

    remove: function(req, res) {
        db.Book
            .findById({ _id: req.params.id }).then(
                dbModel => dbModel.remove()
            ).then(dbModel => res.json(dbModel)
            ).catch(err => res.status(422).json(err)
        );

    }
};

