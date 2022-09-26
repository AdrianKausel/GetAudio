const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, {timestamps:true});  

    UserComposerSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

    UserComposerSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
    });

    UserComposerSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
    });
});


const UserComposer = mongoose.model('User Composer', UserComposerSchema);

module.exports = UserComposer;