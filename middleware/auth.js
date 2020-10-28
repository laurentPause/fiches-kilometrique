exports.verify = function(req, res, next){
    if ( req.session.user || req.session.admin ) {
       next();
    } else {
        res.redirect('/login');
    }  
}

exports.logged = function(req, res, next){
    if (req.session.user || req.session.admin) {
        res.redirect('/');
    } else {
       next()
    }  
}