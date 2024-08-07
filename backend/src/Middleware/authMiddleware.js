const jwt =require('jsonwebtoken');
const User = require('../Models/userModel');

const authMiddleware = async(req,res,next) => {
    const token = req.header("Authorization");
    console.log(token)
    if(!token || token.length<7){
        return res
            .status(401)
            .json({message:"Unauthorized: Token not provided"})
    
    }
  
        const jwtToken = token.replace("Bearer", "").trim();
        // console.log("token from auth middleware", jwtToken )
    
  
     try{
       
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET)
        const userData = await User.findOne({email:isVerified.email}).
        select({
            password: 0
        })

        req.user = userData;
        req.token = token;
        req.id = userData.id
    next();
}catch(error){
    return res.status(401).json({message:"unauthorized.Invalid token."})
}
};

module.exports = authMiddleware