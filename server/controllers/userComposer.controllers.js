const UserComposer = require('../models/userComposer.models');

module.exports.List = (req, res) => {
    UserComposer.find()
        .then(data => {
            res.json({userComp: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}
module.exports.ListOne = (req, res) => {
    UserComposer.find()
        .then(data => {
            res.json({userComp: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}

module.exports.newFind = (req, res) => {
    UserComposer.findById(req.params.id)
    .then(data => {
        res.json({userComp: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.newCreate = (req, res) => {
    UserComposer.create(req.body)
    .then(data => {
        res.json({userComp: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.newUpdate = (req, res) => {
    UserComposer.findByIdAndUpdate(req.params.id, req.body)
    .then(data => {
        res.json({userComp: req.body})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.newDelete = (req, res) => {
    UserComposer.findByIdAndDelete(req.params.id)
    .then(data => {
        res.json({mensaje: 'Elemento eliminado'})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

