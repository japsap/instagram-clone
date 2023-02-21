const { Types, model, Schema} = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
    username : {
        type: String,
        required: true,
        minLength: [2, 'Username too short!']
    },
    email: {
        type: String,
        required: true,
        minLength: [5, 'Email too short!']
    },
    password: {
        type: String,
        required: true,
        minLength: [3, 'Password too short!']
    }
})

    UserSchema.pre('save', function(next){
        bcrypt.hash(this.password, 10) 
            .then(hash => {
                this.password = hash;

                next();
            })
    })
    UserSchema.method('comaparePassword', function(password){
        return bcrypt.compare(password, this.password);
    });

const User = model('User', UserSchema)


 module.exports = User;