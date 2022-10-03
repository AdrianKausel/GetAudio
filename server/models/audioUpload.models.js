const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AudioUploaderSchema = mongoose.Schema({
    artist: {
        type: String
    },
    name:{
        type: String
    },
    file: {
        type: String
    },
}, {timestamps:true})

const AudioUploader = mongoose.model('AudioUploader5', AudioUploaderSchema);

module.exports = AudioUploader;

