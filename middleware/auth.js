exports.verify = function(req, res, next){
    if ( req.session.user ) {
       next();
    } else {
        res.redirect('/login');
    }  
}

exports.logged = function(req, res, next){
    if (req.session.user ) {
        res.redirect('/');
    } else {
       next()
    }  
}