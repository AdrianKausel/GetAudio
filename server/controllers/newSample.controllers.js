const NewSample = require('../models/newSample.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../config/jwt.config')

module.exports.List = (req, res) => {
    NewSample.find()
        .then(data => {
            res.json({userComp: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}

/* module.exports.ListOne = (req, res) => {
    MediaFiles.find()
        .then(data => {
            res.json({userComp: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}

module.exports.newFind = (req, res) => {
    MediaFiles.findById(req.params.id)
    .then(data => {
        res.json({userComp: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.newCreate = (req, res) => {
    MediaFiles.create(req.body)
    .then(data => {
        res.json({userComp: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
} */

// NEW SAMPLE . .   .   .   . JAVIER

module.exports.newSample = (req, res) => {
    NewSample.create(req.body)
    .then(data => {
        //console.log('ss')
        res.json({userComp: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}
/* 
module.exports.newDelete = (req, res) => {
    MediaFiles.findByIdAndDelete(req.params.id)
    .then(data => {
        res.json({mensaje: 'Elemento eliminado'})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

 */