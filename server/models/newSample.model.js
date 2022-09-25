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
    /* description:{
        type:String
    }, */
    tag: {
        type:Array
    },
    active:{
        type:Boolean
    },
    URL:{
        type:String
    }
    /* {
        type: String,
    } */
    /* media: {
        type: Buffer,
        required: [true, 'media  Required']
    }, */
})
    /* {timestamps:true});   */


const NewSample = mongoose.model('NewSample', NewSampleSchema);

module.exports = NewSample;