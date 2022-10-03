const NewSample = require('../models/newSample.model');
const multer = require('multer');
const {getConnection} = require('../config/audiodb.config');
const {GridFSBucket, ObjectId} = require('mongodb');
const {Readable} = require('stream')

const getAudioFile = (req, res) => {
    
    let queryID;

    try{
        queryID = new ObjectId(req.params.id);
    } catch(error){
        return res.status(400).json({
            message: 'Invalid track ID in URL'
        })
    };

    res.set('content-type', 'audio/mp3');
    res.set('accept-ranges', 'bytes');

    const db = getConnection();
    const bucket = new GridFSBucket(db, {
        bucketName: 'audiofiles'
    });
    let downloadStream = bucket.openDownloadStream(queryID)
    downloadStream.on('data', chunk=>{
        res.write(chunk);
    });
    
    downloadStream.on('error', ()=>{
        res.sendStatus(404);
    });
    
    downloadStream.on('end', ()=>{
        res.end();
    });


}

const uploadAudioFile = (req, res) => {
    const storage = multer.memoryStorage();
    const upload = multer({
        storage: storage,
        limits: {
            // para agregar 2 campos, además del
            // archivo, artist y title
            fields: 1,
            fileSize: 11000000,
            files: 3,
            // 3 partes son: 1 archivo y 2 fields
            parts: 3
        }
    });

    upload.single('audiofile')(req, res, (err)=>{
        if(err) {
            console.log(err);
            return res.status(400).json({
                message: err.message
            })
        } else if(!req.body.title){
            // !req.body.title significa que no existe este campo
            return res.status(400).json({
                message: 'No title found on req.body'
            })
        }

        let audiofiletitle = req.body.title;

        const readableAudioFileStream = new Readable();
        readableAudioFileStream.push(req.file.buffer);
        readableAudioFileStream.push(null);
    
    
        const db = getConnection();
        const bucket = new GridFSBucket( db ,{
            bucketName: 'audiofiles'
        })
    
        let uploadStream = bucket.openUploadStream(audiofiletitle)
        const id = uploadStream.id;
        readableAudioFileStream.pipe(uploadStream);
    
        uploadStream.on('error', ()=>{
            return res.status(500).json({
                message: 'Error uploading file'
            })
        });
    
        uploadStream.on('finish', ()=>{
            return res.status(201).json({
                message: 'File uploaded successfully',
                id: id
            })
        });

    })

}

module.exports = {
    getAudioFile,
    uploadAudioFile
}