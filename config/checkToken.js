const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    let token = req.get('Authorization') || req.query.token

    if(token){
        // parse out the token from the bearer string
        token = token.replace('Bearer ', '');

        jwt.verify(token, process.env.SECRET, function(err, decoded){
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
            next()
        })
    }else{
        req.user = null
        next()
    }
}


// null <--- verify err, unable to ver null
// 'fdlashjndflkads' <-- verify err malformed token
// ---> anything that err, we just say no user present


// 'valid token NOT EXP' <--- decoded {data, exp}
// 'valid EXP'<--- decoded : {data, exp}

// save user data

// save exp date


// every req,

// req: {

//     ...other props it has
//     user: {...},
//     exp:{ ...}
// }