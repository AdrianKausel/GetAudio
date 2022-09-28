const mongoose = require('mongoose');


const AudioUploaderSchema = mongoose.Schema({
    artist: {
        type: String
    },
    fileName:{
        type: String
    },
    file: {
        type: String
    },
}, {timestamps:true})

const AudioUploader = mongoose.model('AudioUploader', AudioUploaderSchema);

module.exports = AudioUploader;

