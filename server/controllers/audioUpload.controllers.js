const AudioUploader = require('../models/audioUpload.models')
const fs = require('fs');



module.exports.uploadOne = (req, res) => {
    console.log(req.files, req.body)
    if(req.files ===null) {
        return res.status(400).json({msg: 'No File uploaded'});
    }
    
    const file = req.files.file;
    
    const data = {
        file: `${__folder}/uploads/${file.name}`, 
        name: req.body.filename
    }
    file.mv(`${__folder}/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            res.status(500).send(err);
            }else{
                AudioUploader.create(data)
                .then(resp => {
                    res.json({ fileName: file.name, filePath: `${__folder}/uploads/${file.name}` })
                    console.log(file.name)
                })

            }
    })
    }

    module.exports.List = (req, res) => {
        AudioUploader.find()
            .then(data => {
                res.json({data});
                console.log(data);
            }).catch(error => {
                res.status(500).json({mensaje: error})
            })
    }

    module.exports.newFind = (req, res) => {
        AudioUploader.findById(req.params.id)
            .then(resp => {
                if(resp?.file) {
                    res.download(resp.file);
                }
            })
    }