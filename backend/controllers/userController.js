const User=require('./../models/userModel');
const jwt=require('jsonwebtoken');

const createToken=(_id)=>{
    const payload={_id};
    const token=jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '7d'
    })
    return token;
}

const loginController=async (req, res)=>{
    const {email, password}=req.body;
    try{
        const user=await User.login(email, password);
        // res.clearCookie('auth_token', {
        //     httpOnly: true
        // });
        const token=createToken(user._id);
        res.cookie('auth_token', token, {
            httpOnly: true,
            expiresIn: new Date()+7,
            sameSite: 'None',
            secure: true
        });
        return res.status(200).json({
            id: user._id,
            name: user.name
        });
    }catch(err){
        res.status(401).json({error: err.message});
    }
}

const logoutController=(req, res)=>{
    res.cookie('auth_token', '', {
        httpOnly: true,
        expiresIn: new Date(0),
        sameSite: 'None',
        secure: true
    }).send();
}

const signupController=async (req, res)=>{
    const {name, email, password}=req.body;
    try{
        await User.signup(name, email, password);
        res.status(200).json(true);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

const isLoggedInController=async (req, res)=>{
    try{
        const user=await User.findById(req._id);
        res.status(200).json({
            id: user._id,
            name: user.name
        });
    }catch(err){
        res.status(401).json({error: err.message});
    }
}

module.exports={loginController, signupController, logoutController, isLoggedInController};