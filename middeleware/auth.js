
const jwt = require('jsonwebtoken')

// verify token



//generate token
function auth(req,res,next){
var{authorization} = req.headers
if(authorization){
jwt.verify(authorization, process.env.SECRET,function(err,decoded){
    if(err){
        res.status(401).json({message:err.message})
    }
    if(decoded){
        req.username=decoded.username
        req.userId=decoded.userId
        //console.log(decoded);
        next()
    }else{
        res.status(401).end()
    }
})
}else{
    res.status(401).end()
}
}




function isAdmin(req, res, next) {
    auth(req, res, function () {
        if (req.userData.isAdmin === true) {
            next();
        } else {
            return res.status(401).json("not Admin");
        }
    });
}
function isUser(req, res, next) {
    auth(req, res, async function () {
        if (req.userData.isAdmin === false) {
            const reqUser = await User.findById(req.userData.userId);
            if (reqUser) {
                next();
            }
        } else {
            return res.status(401).json("not user");
        }
    });
}



module.exports = { auth, isAdmin, isUser }