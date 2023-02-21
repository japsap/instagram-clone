const jwt = require('../lib/jsonwebtoken');

exports.authentication = async (req, res, next) => {

    const token = req.cookies['auth'];

    if(token){
        try{
            const decodedToken = await jwt.verify(token, 'jCj^%Ii&pfBoTbng@FvM7b64UEisU8');
            req.user = decodedToken;
            req.isAuthenticated = true;
            res.locals.username = decodedToken.username;
            res.locals.isAuthenticated = true;

        } catch(err){
            console.log(err);
            res.redirect('/404')
        }
    }else {
        //public user
    }
    next();
}

exports.isAuthenticated = ( req, res, next ) => {
    if(!req.isAuthenticated){
        return
    }

    next();
}   