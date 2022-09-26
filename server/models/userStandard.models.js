const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const UserStandardSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Name required']
    },
    lastName: {
        type: String,
        required: [true, 'Artist Name required']
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required:[true, 'pwd required']
    },
}, {timestamps:true});  

    UserStandardSchema.virtual('confirmPassword')
        .get( () => this._confirmPassword )
        .set( value => this._confirmPassword = value );

    UserStandardSchema.pre('validate', function(next) {
        if (this.password !== this.confirmPassword) {
            this.invalidate('confirmPassword', 'Password must match confirm password');
        }
        next();
    });

    UserStandardSchema.pre('save', function(next) {
        bcrypt.hash(this.password, 10)
            .then(hash => {
            this.password = hash;
            next();
    });
});

const UserStandard = mongoose.model('User Standard', UserStandardSchema);

module.exports = UserStandard;