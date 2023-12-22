const jwt=require('jsonwebtoken');

function auth(req, res, next){
    try{
        const token=req.cookies.auth_token;
        if(!token){
            return res.status(401).json({error: 'Unauthorized'});
        }
        const verified=jwt.verify(token, process.env.JWT_SECRET);
        req._id=verified._id;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({error: 'Unauthorized'});
    }
}

module.exports=auth;