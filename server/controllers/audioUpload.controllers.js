const AudioUploader = require('../models/audioUpload.models')



module.exports.uploadOne = (req, res) => {
    console.log(req.files)
    if(req.files ===null) {
        return res.status(400).json({msg: 'No File uploaded'});
    }
    
    const file = req.files.file;
    
    const data = {
        file: `${__folder}/client/public/uploads/${file.name}`
    }
    file.mv(`${__folder}/client/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err);
            res.status(500).send(err);
            }else{
                AudioUploader.create(data)
                .then(resp => {
                    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
                    console.log(file.name)
                })

            }
    })
    }

    module.exports.List = (req, res) => {
        AudioUploader.find()
            .then(data => {
                res.json({data: data})
            }).catch(error => {
                res.status(500).json({mensaje: error})
            })
    }