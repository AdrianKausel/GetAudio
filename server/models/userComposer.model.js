const mongoose = require('mongoose');


const UserComposerSchema = mongoose.Schema({
    UserName: {
        type: String,
        required: [true, 'Name required']
    },
    ArtistName: {
        type: String,
        required: [true, 'Artist Name required']
    },
    Country: {
        type: String,
        required: [true, 'Country Required']
    },
    ProfilePic: {
        type: String,
    }
}, {timestamps:true});  

const UserComposer = mongoose.model('User Composer', UserComposerSchema);

module.exports = UserComposer;