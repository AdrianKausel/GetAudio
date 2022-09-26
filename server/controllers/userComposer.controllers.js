const UserComposer = require('../models/userComposer.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../config/jwt.config')

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
module.exports.login = (req, res) => {
    console.log(req.body)
    UserComposer.findOne({ email: req.body.email })
    .then(user => {
        console.log(user)
            if (user === null) {
                res.json({
                    error:true,
                    msg: "invalid login attempt1",
                });
            } else {
                bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    console.log(valid)
                    if (valid) {
                        const newJWT = jwt.sign({
                        _id: user._id,

                    },secret.secretKey)
                    console.log("hello")
                    res.cookie("usertoken", newJWT,{
                        httpOnly: true
                    })
                    .json({ error: false, user: {firstName: user.firstName, lastName: user.lastName, email: user.email, artistName: user.artistName}});
                } else {
                    res.json({ 
                        error:true
                    });
                }
                })
                .catch(err => res.json({ msg: "invalid login attempt2" }));
            }
        })
        .catch(err => res.json(err));
    };

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

