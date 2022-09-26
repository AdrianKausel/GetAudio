const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const MediaFilesSchema = mongoose.Schema({
    tag: {
        type: String,
    },
    media: {
        type: Buffer,
        required: [true, 'media  Required']
    },
}, {timestamps:true});  

    MediaFilesSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

    MediaFilesSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

    MediaFilesSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
    });
});


const MediaFiles = mongoose.model('Media Files', MediaFilesSchema);

module.exports = MediaFiles;