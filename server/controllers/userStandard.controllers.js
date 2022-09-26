const UserStandard = require('../models/userStandard.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../config/jwt.config')

module.exports.List = (req, res) => {
    UserStandard.find()
        .then(data => {
            res.json({userStndr: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}
module.exports.ListOne = (req, res) => {
    UserStandard.find()
        .then(data => {
            res.json({userStndr: data})
        }).catch(error => {
            res.status(500).json({mensaje: error})
        })
}

module.exports.newFind = (req, res) => {
    UserStandard.findById(req.params.id)
    .then(data => {
        res.json({userStndr: data})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.newCreate = (req, res) => {
    UserStandard.create(req.body)
    .then(data => {
        res.json({
            userStndr: data,
            error: false
        })
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.login = (req, res) => {
    console.log(req.body)
    UserStandard.findOne({ email: req.body.email })
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
                    .json({ error: false, user: {firstName: user.firstName, lastName: user.lastName, email: user.email}});
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
    UserStandard.findByIdAndUpdate(req.params.id, req.body)
    .then(data => {
        res.json({userStndr: req.body})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

module.exports.newDelete = (req, res) => {
    UserStandard.findByIdAndDelete(req.params.id)
    .then(data => {
        res.json({mensaje: 'Elemento eliminado'})
    }).catch(error => {
        res.status(500).json({mensaje: error})
    })
}

