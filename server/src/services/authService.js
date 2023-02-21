const User = require('../Schemas/User');
const AppError = require('../utils/AppError');
const jwt = require('../lib/jsonwebtoken');

//---------------------------------------------------------------------------//

exports.getOne = (username) => User.findOne({username}); 

//---------------------------------------------------------------------------//

exports.register = ( username, password, email ) => User.create({ username, password, email });

//---------------------------------------------------------------------------//

exports.login = async (username, password) => {

    const user = await this.getOne(username);
    const pass = await user.comaparePassword(password);

    if(!user){
        throw new AppError('Invalid user', { user })
    }

    if(!pass){
        throw new AppError('Invalid password', {user});
    }

    const secret = 'jCj^%Ii&pfBoTbng@FvM7b64UEisU8';
    const payload = { _id: user._id, email: user.email, username:user.username }

    const token = await jwt.sign(payload, secret, { expiresIn: '2h'});

    return token
}

//---------------------------------------------------------------------------//
