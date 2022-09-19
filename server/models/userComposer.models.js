const mongoose = require('mongoose');


const UserComposerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Name required']
    },
    lastName: {
        type: String,
        required: [true, 'Artist Name required']
    },
    artistName: {
        type: String,
        required: [true, 'Country Required']
    },
    emailAdress: {
        type: String,
    },
    password: {
        type: String,
    }
}, {timestamps:true});  

const UserComposer = mongoose.model('User Composer', UserComposerSchema);

module.exports = UserComposer;