const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const NewSampleSchema = mongoose.Schema({
    artist:{
        type:String,
        required:[true,"Artist is required"]
    },
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    file: {
        type: Buffer
    },
})
    /* {timestamps:true});   */


const NewSample = mongoose.model('NewSample', NewSampleSchema);

module.exports = NewSample;